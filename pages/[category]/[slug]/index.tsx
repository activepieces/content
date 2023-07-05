import { join } from "path";
import fs from "fs";
import matter, { GrayMatterFile } from "gray-matter";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Image from "next/image";

type MetaData = {
  title: string;
  description: string;
  thumbnail: string;
  author: string;
};

type BlogPostProps = {
  content: string;
  meta: MetaData;
};

export default function BlogPost({ content, meta }: BlogPostProps) {
  return (
    <main className="container mx-auto px-3 py-4 md:px-0 mt-16">
      <article className="mx-auto prose mt-8">
        <header className="mb-8 mx-auto text-center">
          <h1 className="text-4xl font-bold">{meta.title}</h1>
          <div>
            <Image className="mx-auto"
              src={meta.thumbnail}
              alt="Blog thumbnail"
              width={350}
              height={350}
            />
          </div>
          <span className="text-muted">{meta.description}</span>
          <br></br>
          <span className="text-muted">Author: {meta.author}</span>
        </header>
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
    </main>
  );
}

export async function getServerSideProps(context: {
  query: { slug: string; category: string };
}) {
  // Fetch the markdown content for the requested blog post
  const { slug, category } = context.query;
  const docsDirectory = join(process.cwd(), "content", category);
  const fullPath = join(docsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8").toString();
  const { data, content }: GrayMatterFile<string> = matter(fileContents);
  const meta: MetaData = {
    title: data.title,
    description: data.description,
    thumbnail: '/' + category + '/' + data.thumbnail,
    author: data.author
  };

  return {
    props: {
      content: content,
      meta,
    },
  };
}
