import fs from "fs";
import grayMatter from "gray-matter";
import { remark } from "remark";
import remarkHTML from "remark-html";
import { Post } from "../types/Post";

export function getAllPosts(): Post[] {
  const allPostsFileNames = fs.readdirSync("./posts");

  const posts = allPostsFileNames.map((filename) => {
    const fileContent = fs.readFileSync(`./posts/${filename}`, "utf-8");

    const { content, data: metadata } = grayMatter(fileContent);
    
    const htmlContent = remark()
      .use(remarkHTML)
      .processSync(content)
      .toString();

    return {
      metadata: {
        ...metadata,
        slug: filename.replace(".md", ""),
      },
      content: htmlContent,
    } as Post;
  });

  return posts;
}
