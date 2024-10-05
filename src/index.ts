import MarkdownIt from "markdown-it";

interface TokenRender {
  (
    tokens: MarkdownIt.Token[],
    idx: number,
    options: MarkdownIt.Options,
    env: any,
    self: MarkdownIt.Renderer
  ): string;
}

const markdownItUnderline = (md: MarkdownIt): void => {
  const renderStrong: TokenRender = (
    tokens: MarkdownIt.Token[],
    idx: number,
    options: MarkdownIt.Options,
    env: any,
    self: MarkdownIt.Renderer
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
