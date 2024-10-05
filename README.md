# markdown-it-underline

Renders this markdown

```md
<!-- prettier-ignore -->
__underline__
```

to this HTML

```HTML
<u>underline</u>
```

See [the discussion at talk.commonmark.com](https://talk.commonmark.org/t/feature-request-underline-text/343).

## Install

```sh
npm install @futami/markdown-it-underline
```

## Usage

### CommonJS

```js
const underline = require("markdown-it-underline");
const md = require("markdown-it")().use(underline);

console.log(md.renderInline("__underline__"));
```

### Module

```js
import underline from "@futami/markdown-it-underline";
import md from "markdown-it";

md().use(underline).renderInline("__underline__");
```

## Development

Add tests in [test.js](test.js).

```sh
npm test
npm version [patch|minor|major]
npm publish
```
