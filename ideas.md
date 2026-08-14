# AI SIDE HUSTLES Website Design Direction

## Three initial directions

### Theme Name: Midnight Product Sprint
Very Brief Intro: A dark, editorial launch page with cobalt and violet accents, treating the ebook like a focused product sprint rather than a lifestyle brand. The mood is decisive, practical, and premium.
Probability: 0.07

### Theme Name: Paper Trail Studio
Very Brief Intro: A warm off-white editorial system with ink-black typography, blue marginalia, and tactile worksheet references. The mood is thoughtful, useful, and quietly confident.
Probability: 0.04

### Theme Name: Signal / Shelf
Very Brief Intro: A high-contrast commerce landing page inspired by independent publishing shelves, with a dark navy field, bright cobalt “signal” blocks, and crisp information cards. The mood is energetic, clear, and built to convert without hype.
Probability: 0.09

## Chosen approach: Signal / Shelf

### Design Movement
Contemporary editorial commerce: a hybrid of independent publishing, product-led SaaS launch pages, and Swiss information design. It uses a dark “shelf” as the stage, then lets clean cards and strong type carry the practical story.

### Core Principles
1. **Make the product legible before making it decorative.** The ebook cover, product name, format, and outcome lead every section.
2. **Build contrast through material shifts.** Midnight navy, paper-white surfaces, cobalt signal blocks, and violet secondary accents create clear zones rather than one continuous gradient.
3. **Treat proof as a visual object.** Show blueprint cards, a prompt specimen, the one-page builder, and a launch sequence as things the visitor can understand in seconds.
4. **Use energy only where action happens.** Motion is reserved for the hero shelf, chapter chips, hover elevation, and CTA states; content remains calm and readable.

### Color Philosophy
Midnight navy is the shelf: it gives the guide authority and makes the bright cobalt signal feel owned. Cobalt blue is the signature action color because it reads as practical and directional, not aspirational fluff. Soft paper white makes the ebook feel printable and useful. Violet is used sparingly as a secondary highlight for “package” and “bonus” moments. The overall palette should feel like a well-designed field manual with a modern digital edge.

### Layout Paradigm
Use an asymmetric “shelf and proof” composition rather than a centered marketing stack. The hero has a left-aligned editorial copy block and a right-side product shelf. Below it, sections alternate between broad proof bands and offset content rails. On mobile, the shelf collapses into a horizontal card stack while all copy remains left aligned.

### Signature Elements
1. **The product shelf:** stacked, angled paper cards that echo the ebook cover and show “01 create / 02 package / 03 publish” as a recurring system.
2. **Signal rules:** short cobalt or violet lines that mark section transitions and connect labels to outcomes.
3. **Field-note tags:** compact uppercase labels such as `NO-BUDGET`, `25 PROMPTS`, and `35-PAGE PDF` that function like editorial marginalia.

### Interaction Philosophy
Every interaction should clarify the product. Hovering a blueprint card exposes the job it solves; clicking a chapter chip scrolls to the relevant proof; the main CTA always goes to a concrete next step. Buttons should feel like physical controls: a quick press, a small lift, and a clear focus ring. Avoid surprise modals and avoid decorative motion that competes with the reading flow.

### Animation
Use a 700ms hero reveal with staggered copy and shelf cards, using a custom ease-out. On scroll, section labels fade and translate upward by a small distance. Blueprint cards lift 4px and shift their signal rule on hover. The prompt specimen reveals line-by-line only on first entry. All non-essential motion must be disabled under `prefers-reduced-motion: reduce`.

### Typography System
Use **Space Grotesk** for display headlines, navigation, labels, and UI controls; use **DM Sans** for body copy and longer reading. Headlines use tight tracking, strong weight contrast, and short line lengths. Body copy stays at 1.05–1.15rem on desktop and at least 1rem on mobile. Uppercase labels use 0.12em tracking and cobalt or muted ink.

### Brand Essence
**AI SIDE HUSTLES is a no-budget field guide for beginners who want to turn one useful idea into a sellable digital product without hype.** Personality: practical, sharp, encouraging.

### Brand Voice
Headlines are direct and specific. CTAs sound like an invitation to act, not a promise of wealth. Microcopy is calm about uncertainty and precise about what is included.

Example lines:

> One useful product beats one hundred vague ideas.

> Build the first version. Package the proof. Learn from the launch.

### Wordmark & Logo
Use a compact “signal shelf” mark: three staggered cobalt rectangles stepping upward from left to right, with a small violet square as the final signal. The wordmark is set in Space Grotesk with custom-tight tracking and a cobalt underline rule. The mark should work alone as a favicon-sized symbol and beside the wordmark in the header.

### Signature Brand Color
**Signal Cobalt — `#2563EB`.** It is bright enough to direct action on midnight navy and restrained enough to remain credible on paper-white surfaces.

## Implementation reminder

Every CSS/component/page file should begin with a short comment naming the Signal / Shelf direction, the material contrast, and the current file’s signature element. When in doubt: **Does this choice make the product easier to understand, or does it merely make the page busier?**

## Style Decisions

- Signal Cobalt `#2563EB` is reserved for primary actions, numbered proof, section signal rules, and one decisive headline phrase per section.
- Every major section must include an offset proof artifact, a marginal field-note label, or a shelf/stack reference so the page does not collapse into a centered SaaS layout.
- The header wordmark pairs the staggered signal-shelf mark with a custom Space Grotesk treatment and cobalt underline.
