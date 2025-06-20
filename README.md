# ScalediaBootstrap

ScalediaBootstrap is a simple static website built with [Bootstrap](https://getbootstrap.com/) and plain JavaScript. The site hosts articles about marketing, personal finance and programming. It supports multiple languages through the use of [i18next](https://www.i18next.com/) and its translation files stored under `locales/`.

## Project structure

```
.
├── CNAME                # Domain configuration for GitHub Pages
├── index.html           # Home page
├── articles/            # Individual article pages
├── css/                 # Bootstrap and custom stylesheets
├── js/                  # JavaScript (Bootstrap bundle and custom scripts)
├── locales/             # JSON translations for each language
├── images/              # Image assets
├── robots.txt           # Robots configuration
└── sitemap.xml          # Sitemap for search engines
```

## Local development

To preview the site locally you need a static file server so that the translation files can be loaded. If you have Python installed you can run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

The pages make requests to external services (e.g. ipapi) for language detection. Ensure you have an internet connection while testing.

## Deployment

The project is designed to be deployed on GitHub Pages:

1. Push the contents of this repository to the `main` branch.
2. In the repository settings enable GitHub Pages and set the source to `main`.
3. The `CNAME` file configures the custom domain `scaledia.net`.

Any other static hosting provider can also serve the contents of the repository.

## Contributing

Contributions are welcome. Feel free to open an issue or pull request on GitHub if you spot a problem or would like to suggest improvements.

Please follow standard GitHub workflow:

1. Fork the repository and create a feature branch.
2. Make your changes and open a pull request against `main`.
3. Describe your changes clearly so they can be reviewed.

## Reporting issues

Use the GitHub [issue tracker](https://github.com/your-user/ScalediaBootstrap/issues) to report bugs or request enhancements. Include as much information as possible so that the issue can be reproduced.


