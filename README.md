# Adding a new page to the docs section

- Make sure to add "front matter" so that the title and description are included as head tags and included in metadata tags for search engines and social links.

E.g. start every `mdx` page with both these properties. Make sure it is right at the top (before any imports)

```
---

title: Introduction to TraitForge

description: General Information about the Project

---
```

# Nextra Docs Template

This is a template for creating documentation with [Nextra](https://nextra.site).

[**Live Demo →**](https://nextra-docs-template.vercel.app)

[![](.github/screenshot.png)](https://nextra-docs-template.vercel.app)

## Local Development

First, run `pnpm i` to install the dependencies.

Then, run `pnpm dev` to start the development server and visit [localhost:3000](http://localhost:3000).

## License

This project is licensed under the MIT License.
