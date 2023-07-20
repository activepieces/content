
import { join } from "path";
import fs from "fs";
import matter, { GrayMatterFile } from "gray-matter";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Image from "next/image";
import { Metadata } from "next";
import { NavigationProps } from "../../../components/navigationProps";
import Link from "next/link";



export async function generateMetadata(
  { params }: NavigationProps,
): Promise<Metadata> {
  // read route params
  const blogName = params.id
  const docsDirectory = join(process.cwd(), "content");
  // fetch data
  const fullPath = join(docsDirectory, blogName + '.mdx');
  const fileContents = await fs.promises.readFile(fullPath, "utf8");
  const { data } = matter(fileContents);

  return {
    title: "Activepieces - " + data.title,
    description: data.description,
    authors: { url: "www.activepieces.com", name: data.author },
    icons: "/favicon.ico",
  }
}

export default async function BlogPost({ params }: NavigationProps,) {
  const blogName = params.id
  const docsDirectory = join(process.cwd(), "content");
  // fetch data
  const fullPath = join(docsDirectory, blogName + '.mdx');
  const fileContents = await fs.promises.readFile(fullPath, "utf8");
  const { data, content }: GrayMatterFile<string> = matter(fileContents);

  return (
    <main className="px-3 py-4 md:px-0  bg-white">
      <article className="container  mx-auto prose my-8  ">
      <nav className="text-lg my-4">
        <Link href="/blog" className="no-underline">
          {/* Apply your custom styles for the link */}
          <span className="text-primary no-underline hover:underline cursor-pointer">Blog</span>
        </Link>{" "}
        / <span className="text-black">{data.title}</span>
        </nav>
        <header className="mb-8 mx-auto text-left">
          <h1 className="text-4xl font-bold">{data.title}</h1>
          <span>{data.author} | Published on {data.updatedAt}</span>
          <div>
            <Image className="mx-auto"
              src={data.thumbnail}
              alt="Blog thumbnail"
              width={350}
              height={350}
            />
          </div>
        </header>
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
    </main>
  );
}
