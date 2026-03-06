## Overview

This is a minimal **SvelteKit contact form** project styled with Tailwind CSS and backed by **Directus** as a headless CMS/database.

Users can submit their **name**, **email**, and a **message** through the form on the home page. The submission is:

- **Validated on the server** using Zod
- **Handled via SvelteKit’s `form` API**
- **Stored in Directus** in a `contact_form` collection
- Provides simple **success/error feedback** in the UI

## What the main files do

- **`src/app.html`**  
  Base HTML template used by SvelteKit. It defines the document structure and hosts `%sveltekit.head%` and `%sveltekit.body%` placeholders that SvelteKit fills at runtime.

- **`src/routes/+page.svelte`**  
  Root page component. It simply imports and renders the `Form.svelte` component, making the contact form the main content of the app.

- **`src/lib/Form.svelte`**  
  UI for the contact form. It:
  - Binds the `<form>` element to `submitForm` from `forms.remote.ts`
  - Renders inputs for `name`, `email`, and `message`
  - Displays field‑level validation errors
  - Shows a success message when the form is submitted successfully

- **`src/lib/forms.remote.ts`**  
  Server-side form logic. It:
  - Defines a Zod schema for the form (`name`, `email`, `message`)
  - Uses SvelteKit’s `form` helper to create `submitForm`
  - On submit, writes a new item into the `contact_form` collection in Directus
  - Returns a success flag/message or throws a 500 error on failure

- **`src/lib/server/directus.ts`**  
  Directus client configuration. It:
  - Creates a Directus SDK client pointed at `http://localhost:8055`
  - Adds a static access token via `staticToken(...)`
  - Enables the REST transport with `.with(rest())`
    Replace the placeholder token (`YOUR DIRECTUS STATIC TOKEN`) and URL as needed for your environment.

- **`src/routes/layout.css`**  
  Global CSS entry that imports Tailwind via the new `@import 'tailwindcss'` syntax and registers the `@tailwindcss/forms` and `@tailwindcss/typography` plugins. This powers the utility classes used in the form.

- **`static/robots.txt`**  
  Simple robots configuration that currently allows all user agents to crawl the site.

- **`.vscode/settings.json`**  
  Workspace editor settings (for example, formatting behavior or Svelte/TypeScript integration).

- **`.vscode/extensions.json`**  
  Recommended VS Code extensions for working with this project (e.g., Svelte, Tailwind, etc.).

## Running the project

- **Install dependencies**

```sh
npm install
```

- **Start the dev server**

```sh
npm run dev
```

Then open `http://localhost:5173` (or the URL printed in your terminal).

- **Build for production**

```sh
npm run build
```

You can preview the production build with:

```sh
npm run preview
```

For deployment, configure an appropriate SvelteKit adapter as described in the official docs.
