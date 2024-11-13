import rehypeShiki from "@shikijs/rehype"
import rehypeFormat from "rehype-format"
import rehypeMathjax from "rehype-mathjax"
import rehypeRaw from "rehype-raw"
import rehypeStringify from "rehype-stringify"
import math from "remark-math"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import { unified } from "unified"

export default async function markdownToHtml(
  markdown: string
): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(math)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    .use(rehypeShiki, {
      inline: "tailing-curly-colon",
      theme: "vitesse-black",
    })
    .use(rehypeRaw)
    .use(rehypeFormat)
    .use(rehypeMathjax)
    .use(rehypeStringify)
    .process(markdown)

  return result.toString()
}
