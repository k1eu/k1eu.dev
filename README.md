# k1eu.dev blog

This is a blog that can be visited [here](https://k1eu.dev). It's built using [Astro](https://astro.build/) and deployed via [Netlify](https://www.netlify.com/).

Goals I wanted to achieve:

- 📓 Minimal, rough, old-school styling
- 🌙 With a touch of modernity (dark-mode)
- 📱 Mobile friendly
- 💻 As close to web standards as possible

## How to run

Get required NodeJS version from `.tool-versions` and `pnpm`

- git clone it
- run `pnpm install` inside


Now you can use `pnpm dev` to start developing on [localhost:3000](http://localhost:3000)

## 🚀 Project Structure

```
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                 | Action                                           |
| :---------------------  | :----------------------------------------------- |
| `pnpm install`          | Installs dependencies                            |
| `pnpm run dev`          | Starts local dev server at `localhost:3000`      |
| `pnpm run build`        | Build your production site to `./dist/`          |
| `pnpm run preview`      | Preview your build locally, before deploying     |
| `pnpm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro --help` | Get help using the Astro CLI                     |
