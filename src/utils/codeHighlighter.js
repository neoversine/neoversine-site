export function highlightCode(rawCode, language) {
    if (!rawCode) return '';

    // Convert literal "\n" into actual newlines
    let code = rawCode.replace(/\\n/g, '\n');

    // Escape HTML
    let escapedCode = code
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');

    // Highlight JSX-like tags
    escapedCode = escapedCode.replace(
        /(&lt;\/?[a-zA-Z0-9\-]+)([^&]*?)(&gt;)/g,
        (_, open, attrs, close) =>
            `<span style="color:#e34c26;">${open}</span>${attrs}<span style="color:#e34c26;">${close}</span>`
    );

    // Highlight attributes
    escapedCode = escapedCode.replace(
        /([a-zA-Z\-:]+)=(&quot;.*?&quot;|&#039;.*?&#039;)/g,
        '<span style="color:#6c95eb;">$1</span>=<span style="color:#4caf50;">$2</span>'
    );

    // Highlight JS keywords
    const keywords = ['return', 'const', 'let', 'var', 'function', 'if', 'else', 'for', 'while', 'new', 'class'];
    const keywordRegex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'g');
    escapedCode = escapedCode.replace(keywordRegex, '<span style="color:#9c27b0;">$1</span>');

    // Strings
    escapedCode = escapedCode.replace(
        /(&quot;.*?&quot;|&#039;.*?&#039;)/g,
        '<span style="color:#4caf50;">$1</span>'
    );

    // Functions
    escapedCode = escapedCode.replace(
        /([a-zA-Z_][a-zA-Z0-9_]*)\s*(?=\()/g,
        '<span style="color:#2196f3;">$1</span>'
    );

    // Comments
    escapedCode = escapedCode.replace(
        /(&#047;&#047;.*)/g,
        '<span style="color:#888888;">$1</span>'
    );

    return escapedCode;
}
