import assert from "assert";
import MarkdownIt from "markdown-it";
import markdownItUnderline from "./dist/index.js";

const md = new MarkdownIt().use(markdownItUnderline);

const tests = [
  { input: "*emphasis*", expected: "<em>emphasis</em>" },
  { input: "**strong**", expected: "<strong>strong</strong>" },
  {
    input: "***strong emphasis***",
    expected: "<em><strong>strong emphasis</strong></em>",
  },
  { input: "__underline__", expected: "<u>underline</u>" },
  {
    input: "*__emphasis underline__*",
    expected: "<em><u>emphasis underline</u></em>",
  },
  {
    input: "**__strong underline__**",
    expected: "<strong><u>strong underline</u></strong>",
  },
  {
    input: "***__strong emphasis underline__***",
    expected: "<em><strong><u>strong emphasis underline</u></strong></em>",
  },
];

describe("Markdown Underline Plugin", () => {
  tests.forEach(({ input, expected }) => {
    it(`should render "${input}" correctly`, () => {
      assert.strictEqual(md.renderInline(input), expected);
    });
  });
});
