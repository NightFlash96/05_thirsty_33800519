## Thirsty — Mockup Online Shop Webpage

This repository contains a small mockup online shop web page built with Node.js, Express and EJS templates. It's a front-end focused prototype intended for demoing basic pages and routes, not a production e-commerce system.

## Features

- Simple multi-page site using server-side EJS templates.
- Pages included: home, about, register, search, survey, survey results.
- Static assets served from `public/` (CSS, images, etc.).
- Minimal Express routing in `routes/main.js`.

## Tech stack

- Node.js
- Express
- EJS (Embedded JavaScript templates)
- Static assets (CSS) in `public/`

## Prerequisites

- Node.js (v12+ recommended)
- npm (comes with Node.js)

## Install

1. Open a terminal in the project root.
2. Install dependencies:

```powershell
npm install
```

## Run the app

Start the server with:

```powershell
npm start
# or
node index.js
```

By default the app listens on port 3000 (or the port set in the `PORT` environment variable).

## Project structure

- `index.js` — app entry; sets up Express and starts the server.
- `package.json` — project metadata and scripts.
- `routes/main.js` — route definitions and handlers.
- `views/` — EJS templates for pages:
	- `index.ejs` — home page
	- `about.ejs` — about page
	- `register.ejs` — registration form (mock)
	- `search.ejs` — search UI
	- `survey.ejs` — survey form
	- `survey_results.ejs` — survey results page
	- `partials/header.ejs` — shared header partial
- `public/` — static resources (CSS, images):
	- `css/style.css`

## Routes & Views (quick map)

- `/` -> `views/index.ejs` (home)
- `/about` -> `views/about.ejs` (about page)
- `/register` -> `views/register.ejs` (mock register)
- `/search` -> `views/search.ejs` (search form)
- `/survey` -> `views/survey.ejs` (survey form)
- `/survey/results` -> `views/survey_results.ejs` (survey output)

Open `routes/main.js` to see the exact route names and handler logic.

## Development notes

- The site is server-rendered using EJS. To add a page:
	1. Create a new template file in `views/`.
	2. Add a route in `routes/main.js` that renders that template.
	3. Link the new route from the header partial (`views/partials/header.ejs`).
- Static assets placed in `public/` are served automatically by Express.

## Customization ideas

- Replace mock forms with real data handling (connect to a database).
- Add client-side JS for enhanced UX (search suggestions, form validation).
- Add unit tests or integration tests for routes.

## License

This project is a simple mockup for learning/demo purposes. Use or adapt the code as you like. If you want a license file added (MIT, Apache, etc.), tell me which one and I'll add `LICENSE`.

## Credits

Created as a mockup web page example.

---

If you'd like, I can also:

- Add a short `npm` script for `dev` with nodemon.
- Add a minimal `.gitignore` (if missing).
- Add a license file.

Let me know what you'd like next.

