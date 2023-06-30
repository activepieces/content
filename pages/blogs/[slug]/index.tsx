import { join } from "path";
import fs from "fs";
import matter from "gray-matter";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function BlogPost({
  content,
  meta
}: {
  content: string;
  meta: { title: string; description: string };
}) {
  console.log(content);
  // Render the blog post content using the `marked` library

  return (
    <main className="container mx-auto px-3 py-4 md:px-0 mt-[50px]">
      <h1 className="text-5xl font-bold text-center w-full">{meta.title}</h1>
      <article className="prose mt-[40px]">
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
    </main>
  );
}

export async function getServerSideProps(context: { query: { slug: string } }) {
  // Fetch the markdown content for the requested blog post
  const { slug } = context.query;
  const docsDirectory = join(process.cwd(), "content", "blogs");
  const fullPath = join(docsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8").toString();
  const { data, content } = matter(fileContents);
  const meta = { title: data.title, description: data.description };

  return {
    props: {
      content: content,
      meta,
    },
  };
}
