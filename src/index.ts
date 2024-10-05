import MarkdownIt from "markdown-it";

// Define types using typeof on the instance of MarkdownIt
type Token = (typeof MarkdownIt.prototype)["token"];
type Options = (typeof MarkdownIt.prototype)["options"];
type Renderer = (typeof MarkdownIt.prototype)["renderer"];

interface TokenRender {
  (
    tokens: Token[],
    idx: number,
    options: Options,
    env: any,
    self: Renderer
  ): string;
}

const markdownItUnderline = (md: MarkdownIt): void => {
  const renderStrong: TokenRender = (
    tokens: Token[],
    idx: number,
    options: Options,
    env: any,
    self: Renderer
  ): string => {
    const token = tokens[idx];
    if (token?.markup === "__") {
      token.tag = "u";
    }
    return self.renderToken(tokens, idx, options);
  };

  md.renderer.rules.strong_open = renderStrong;
  md.renderer.rules.strong_close = renderStrong;
};

export default markdownItUnderline;
