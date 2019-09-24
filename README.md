# test-style-loader-nonce

Demonstrates value of `__webpack_nonce__` is not applyed to `<style>` elements created by `style-loader`.

**To Run**
* Pull
* `docker-compose build`
* `docker-compose up`
* Goto http://localhost:8888

**Expectation**
Blue background should be applied via `style.css` loaded by `style-loader`.

**Actual**
Style is not applied. CSP error appears in the dev console.

> bundle.js:1 Refused to apply inline style because it violates the following Content Security Policy directive: "style-src 'nonce-mysecret'". Either the 'unsafe-inline' keyword, a hash ('sha256-LpjzYvTh3c/ORkLyxZ1XcnY3NdUH2gFMMdyhKwGAaw8='), or a nonce ('nonce-...') is required to enable inline execution.
