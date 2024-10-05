import assert from "assert";
import MarkdownIt from "markdown-it";
import markdownItUnderline from "./index.js";

const md = new MarkdownIt().use(markdownItUnderline);

const tests = [
  { input: "*emphasis*", expected: "<em>emphasis</em>" },
  { input: "**strong**", expected: "<strong>strong</strong>" },
  {
    input: "***strong emphasis***",
    expected: "<em><strong>strong emphasis</strong></em>",
  },
  { input: "_underline_", expected: "<u>underline</u>" },
  { input: "__strong__", expected: "<strong>strong</strong>" },
  {
    input: "___strong underline___",
    expected: "<u><strong>strong underline</strong></u>",
  },
];

console.log("Running Markdown Underline Plugin Tests:");

tests.forEach(({ input, expected }, index) => {
  try {
    assert.strictEqual(md.renderInline(input), expected);
    console.log(`✓ Test ${index + 1} passed: "${input}" rendered correctly`);
  } catch (error) {
    console.error(`✗ Test ${index + 1} failed: "${input}"`);
    console.error(`  Expected: ${expected}`);
    console.error(`  Received: ${md.renderInline(input)}`);
  }
});

console.log("All tests completed.");
