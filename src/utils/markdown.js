export function renderMarkdown(markdown) {
    if (!markdown) return '';

    // Bold text (**text** → <strong>)
    let html = markdown.replace(/\*\*(.*?)\*\*/g, '<strong className="text-gray-300 font-semibold">$1</strong>');

    // Split by double newline and wrap in paragraphs
    html = html
        .split('\\n\\n') // Your string contains literal "\n\n"
        .map(paragraph =>
            `<p className="text-gray-400 mb-4">${paragraph.replace(/\\n/g, '<br>')}</p>`
        )
        .join('');

    return html;
}
