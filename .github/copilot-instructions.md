# CoPilot Instructions

## Project Setup
- This is a Vite project using both TypeScript and JavaScript.
- TailwindCSS is used for styling.

## Coding Style
- No comments in the code.
- Avoid long files.
- Break down logic into small, reusable custom components.

## When Generating Code
- Use functional components.
- Use TailwindCSS classes for layout and spacing.
- Keep TypeScript definitions clean and minimal.

## File Organization
- Use clear folder structure: `components/`, `pages/`, `lib/`, etc.
- Place each component in its own file.
- do not use index.ts as a filename for components always use the component name

## Pages
- pages should always call accessElf.track(<pagename>)

