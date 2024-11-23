# The "Vehicle Carousel" frontend project
The project is based on the for Next.js 15+, Tailwind CSS 3.4, and TypeScript.

### Key Features

- Next.js
- TypeScript for type checking
- Tailwind CSS integration
- Strict Mode for TypeScript and React 18
- ESLint for linting (Next.js, Tailwind CSS, and Airbnb configs)
- Prettier for code formatting
- Absolute Imports with '@' prefix

## Getting Started


### Project Structure

We use a relative structure based on the page components. For components specific to a page, we use a `_components` folder within the page's directory. Here's an example:

```
src
├── app/
│   ├── home/
│   │   ├── page.tsx
│   ├── about/
│   │   ├── page.tsx
│   └── ...
├── features/
│   ├── carousel/
│   ├── user/
│   └── ...
├── components/
├── hooks/
├── lib/
├── styles/
├── types/
└── utils/
```

#### Shared elements (used across multiple pages) are stored in the global `src` folder, which includes:
- `components`: Reusable UI components
- `hooks`: Custom React hooks for shared logic across components
- `lib`: Third-party library configurations and custom library code
- `styles`: Global CSS styles and Tailwind CSS configurations
- `types`: TypeScript global type definitions and interfaces
- `utils`: Utility functions and helper methods

This structure promotes modularity and makes it easier to locate and manage components specific to each page while keeping shared resources organized.


### Useful commands

#### Development
```shell
pnpm dev
```
Starts the development server using Next.js. It uses `run-p` to run multiple scripts in parallel, allowing for additional development tasks if needed.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

#### Linting
```shell
pnpm run lint
```
Runs ESLint to check your code for styling and potential errors.

#### Format Code
```shell
pnpm run format
```
Fixes linting issues and formats your code using Prettier, focusing on JSON and YAML files while respecting your `.gitignore`.

## Learn More

To learn more about Project, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Tailwind CSS](https://tailwindcss.com/docs) - a utility-first CSS framework.
- [Shadcn/ui](https://ui.shadcn.com/docs) - beautifully designed components that you can copy and paste into your apps.

## Requirements

Node.js 20+ and npm
