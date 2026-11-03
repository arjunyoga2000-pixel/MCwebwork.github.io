# Munnade Creative Webwork (13 pages)
Edit build.py, then run: python3 build.py (regenerates pages, sitemap, robots, security files).
- GitHub Pages: upload everything. (_headers and .htaccess are ignored there; meta CSP still applies.)
- Cloudflare: reads _headers. Hostinger: reads .htaccess.
- Custom domain: change B in build.py to your domain, rebuild.
- Forms: open WhatsApp by default. Paste a Formspree URL into assets/app.js (CONFIG.endpoint) to send email instead.
