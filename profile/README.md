<!-- zc:header (generated from the registry; edit repos/registry.json) -->
# ZeroCaptcha on GitHub

[Website](https://zerocaptcha.io) · [Docs](https://zerocaptcha.io/docs) · [Quickstart](https://zerocaptcha.io/docs/quickstart) · [API reference](https://zerocaptcha.io/docs/reference/api) · [Pricing](https://zerocaptcha.io/pricing)
<!-- /zc:header -->

## Solve Cloudflare Turnstile and Cloudflare challenge pages with one API

ZeroCaptcha is a CAPTCHA-solving API for developers who automate, test or collect data on sites they are allowed to access. Send a page's URL and its Cloudflare Turnstile sitekey and get a token back; or send a page behind a Cloudflare challenge and your proxy, and get its `cf_clearance` cookie. Prepaid in US dollars, charged per solved task: a failed task costs nothing.

**Start with** [cloudflare-turnstile-solver](https://github.com/ZeroCaptcha/cloudflare-turnstile-solver): a command-line solver, the API in three formats (REST, createTask, in.php), and a map of every tested example.

| | |
| --- | --- |
| Official SDKs | [JavaScript and TypeScript](https://github.com/ZeroCaptcha/zerocaptcha-js) · [Python](https://github.com/ZeroCaptcha/zerocaptcha-python) · [Go](https://github.com/ZeroCaptcha/zerocaptcha-go) |
| AI assistants | [MCP server](https://github.com/ZeroCaptcha/zerocaptcha-mcp) for Claude, Cursor and other MCP clients |
| Examples by language | [Python](https://github.com/ZeroCaptcha/cloudflare-turnstile-solver-python) · [Node.js](https://github.com/ZeroCaptcha/cloudflare-turnstile-solver-nodejs) · [Go](https://github.com/ZeroCaptcha/cloudflare-turnstile-solver-go) · [PHP](https://github.com/ZeroCaptcha/cloudflare-turnstile-solver-php) · [Java](https://github.com/ZeroCaptcha/cloudflare-turnstile-solver-java) · [C#](https://github.com/ZeroCaptcha/cloudflare-turnstile-solver-csharp) · [Rust](https://github.com/ZeroCaptcha/cloudflare-turnstile-solver-rust) |
| Browser automation | [Playwright](https://github.com/ZeroCaptcha/cloudflare-turnstile-solver-playwright) · [Puppeteer](https://github.com/ZeroCaptcha/cloudflare-turnstile-solver-puppeteer) · [Selenium](https://github.com/ZeroCaptcha/cloudflare-turnstile-solver-selenium) |
| Cloudflare challenge pages | [cloudflare-challenge-solver](https://github.com/ZeroCaptcha/cloudflare-challenge-solver): the `cf_clearance` cookie, through your proxy |
| Moving from another service | [createtask-api-migration](https://github.com/ZeroCaptcha/createtask-api-migration): change the host and the key |
| Reading | [awesome-cloudflare-turnstile](https://github.com/ZeroCaptcha/awesome-cloudflare-turnstile), a curated list |

Every example is small, works, and is tested against a stand-in API, so its tests need no key and spend nothing.

<!-- zc:footer (generated from the registry) -->
## More from ZeroCaptcha

- The website: [ZeroCaptcha](https://zerocaptcha.io), the [docs](https://zerocaptcha.io/docs), the [guides](https://zerocaptcha.io/guides), the [blog](https://zerocaptcha.io/blog) and the [status page](https://zerocaptcha.io/status)

## Disclaimer

ZeroCaptcha is an independent service, not affiliated with or endorsed by Cloudflare. Cloudflare and Turnstile are trademarks of Cloudflare, Inc. Use ZeroCaptcha only on sites you own or are allowed to automate, as the [Acceptable Use Policy](https://zerocaptcha.io/legal/acceptable-use) says; any site owner can [opt out](https://zerocaptcha.io/opt-out).
<!-- /zc:footer -->
