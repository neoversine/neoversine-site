📐 UI/UX Section Sizing & Global Margin Rules — 2026 Standard
For Master Website (70% Visual / 30% Text) — Any Laptop Clear Display

1. VIEWPORT & BREAKPOINTS (2026 Market Standard)
Device
Viewport Width
Design Target
Mobile S
360–390px
Base mobile
Mobile L
390–430px
Large phones
Tablet
768–834px
iPad portrait
Small Laptop
1024–1280px
Entry laptops, landscape tablet
Laptop
1280–1440px
Standard laptops
Desktop
1440–1920px
Full HD, most common
Wide Desktop
1920–2560px
QHD, 4K

Primary Design Canvas: 1440px wide (industry wireframe standard for 2026).
Max Content Width: Content never exceeds 1280px. Everything larger gets centered with auto margins.

2. GLOBAL CONTAINER & MARGIN RULES (All Pages)
A. Root Wrapper (`.site-container` or `.wrapper`)
max-width: 1280px
margin-left: auto
margin-right: auto
padding-left: clamp(20px, 4vw, 64px)
padding-right: clamp(20px, 4vw, 64px)
Rule: Every page section must wrap its inner content in this wrapper. Backgrounds/images can bleed full-width, but text and UI never touch screen edges.
B. Global Margin Scale (8px Grid System)
All spacing must be multiples of 8px (or 4px for micro-spacing).
Token
Value
Usage
`--space-xs`
8px
Micro gaps, icon padding
`--space-sm`
16px
Tight component padding
`--space-md`
24px
Card padding, button groups
`--space-lg`
32px
Section inner padding
`--space-xl`
48px
Between major blocks
`--space-2xl`
64px
Section vertical padding (mobile)
`--space-3xl`
96px
Section vertical padding (tablet)
`--space-4xl`
128px
Section vertical padding (desktop)
`--space-5xl`
160px
Hero section padding

C. Page Global Margin (Side Padding by Device)
Device
Side Padding
Reason
320–480px
20px
Minimum safe margin
481–768px
24px
Tablet breathing room
769–1024px
32px
Small laptop
1025–1440px
48px
Standard laptop
1441px+
64px
Desktop luxury whitespace

Formula: `padding-x: clamp(20px, 4vw, 64px)`
D. Section Vertical Padding (70% Visual Rule)
Because the site is 70% visual, sections need generous vertical breathing room so visuals dominate.
Section Type
Mobile
Tablet
Laptop
Desktop
Hero
100px
140px
160px
200px
Content
64px
80px
96px
128px
Visual Showcase
80px
120px
160px
200px
Footer
48px
64px
80px
96px

Formula: `padding-y: clamp(64px, 8vw, 160px)`

3. CONTENT SIZE STANDARDS (2026 Market)
A. Typography Scale (Fluid, rem-based)
Base: `font-size: 16px` (1rem) on desktop, `15px` on mobile.
Element
Mob
Tab
Lap
Desk
Weight
L-Height
H1 (Hero)
40px
56px
64px
80px
700
1.1
Body
15px
16px
17px
18px
400
1.6

Max Line Length: 65 characters (≈ 640px) for body text. Never exceed 720px.

4. SECTION-SPECIFIC SIZING RULES
Hero Section (70% Visual Dominant)
Section Height: `min-height: 90vh` (minimum 700px on laptops).
Visual Balance: 60–70% of area must be imagery/gradient; text overlay capped at 30%.

5. VISUAL-TO-TEXT RATIO ENFORCEMENT (70/30)
Section
Visual Target
Text Target
Enforcement
Hero
70%
30%
Full-bleed background
Work/Projects
75%
25%
Minimal titles


6. LAPTOP-SPECIFIC RULES (Any Laptop Clear Display)
Resolution
Container
Side Margin
Notes
1920×1080
1280px max
48px
Full HD standard

Compiled from 2026 web design market standards: 1920×1080 resolution focus, 1280px content caps, and fluid layout mechanics.

