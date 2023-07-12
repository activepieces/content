
import { join } from "path";
import fs from "fs";
import matter, { GrayMatterFile } from "gray-matter";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Image from "next/image";
import { Metadata } from "next";
import { NavigationProps } from "../../../components/navigationProps";



export async function generateMetadata(
  { params }: NavigationProps,
): Promise<Metadata> {
  // read route params
  const blogName = params.id
  const docsDirectory = join(process.cwd(), "content");
  // fetch data
  const fullPath = join(docsDirectory, blogName+'.mdx');
  const fileContents = await fs.promises.readFile(fullPath, "utf8");
  const { data } = matter(fileContents);
 
  return {
    title: "Activepieces - "+data.title,
    description: data.description,
    authors: {url:"www.activepieces.com", name:data.author},
  }
}

export default async function BlogPost(  { params }: NavigationProps,) {
  const blogName = params.id
  const docsDirectory = join(process.cwd(), "content");
  // fetch data
  const fullPath = join(docsDirectory,  blogName+'.mdx');
  console.log(fullPath);
  const fileContents = await fs.promises.readFile(fullPath, "utf8");
  const { data,content }:GrayMatterFile<string>  = matter(fileContents);
  console.log(data);
  return (
    <main className="px-3 py-4 md:px-0  bg-white">
      <article className="container  mx-auto prose my-8  ">
        <header className="mb-8 mx-auto text-center">
          <h1 className="text-4xl font-bold">{data.title}</h1>
          <div>
            <Image className="mx-auto"
              src={data.thumbnail}
              alt="Blog thumbnail"
              width={350}
              height={350}
            />
          </div>
          <span className="text-muted">{data.description}</span>
          <br></br>
          <span className="text-muted">Author: {data.author}</span>
        </header>
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
    </main>
  );
}
