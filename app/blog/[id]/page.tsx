
import { join } from "path";
import fs from "fs";
import matter, { GrayMatterFile } from "gray-matter";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Image from "next/image";
import { Metadata } from "next";
import { NavigationProps } from "../../../components/navigationProps";
import Link from "next/link";
import { formatDate } from "@/utils/date-helper";

const paragraphClasses = [1,2,3,4,5,6].map(i=> `prose-h${i}:text-h${i}-sm prose-h${i}:lg:text-h${i}-sm`).join(' ');
const listClasses = ['p', 'li', 'ol', 'ul'].map(i=> `prose-${i}:text-h6-sm prose-${i}:lg:text-h6-lg`).join(' ');

export async function generateMetadata(
  { params }: NavigationProps,
): Promise<Metadata> {
  // read route params
  const blogName = params.id
  const docsDirectory = join(process.cwd(), "content", "blog");
  // fetch data
  const fullPath = join(docsDirectory, blogName + '.mdx');
  const fileContents = await fs.promises.readFile(fullPath, "utf8");
  const { data } = matter(fileContents);

  return {
    title: "Activepieces - " + data.title,
    authors: { url: `www.activepieces.com/blog/${blogName}`, name: data.author },
    icons: "/favicon.ico",
  }
}


export default async function BlogPost({ params }: NavigationProps) {
  const blogName = params.id;
  const docsDirectory = join(process.cwd(), "content", "blog");
  // fetch data
  const fullPath = join(docsDirectory, blogName + '.mdx');
  const fileContents = await fs.promises.readFile(fullPath, "utf8");
  const { data, content }: GrayMatterFile<string> = matter(fileContents);

  // Format updatedAt to the desired format
  const formattedPublishOn = formatDate(data.publishedOn);

  return (
    <main className="bg-white w-full">
      <section className="container mx-auto px-3 py-[80px] md:px-0  mx-auto ">
        <nav className="text-lg mb-[35px]">
          <Link href="/blog" className="no-underline">
            {/* Apply your custom styles for the link */}
            <span className="text-primary no-underline hover:underline cursor-pointer">Blogs</span>
          </Link>{" "}

        </nav>
        <header className="mb-[35px] mx-auto text-left">
          <h1 className="text-h1-sm lg:text-h1-lg font-bold mb-[35px]">{data.title}</h1>
          <div className="text-black text-lg font-normal leading-snug tracking-wide mb-[35px]">{data.author} | Published on {formattedPublishOn}</div>
          <div>
            <Image className="rounded-lg w-full h-full object-cover"
              src={data.thumbnail}
              alt="Blog thumbnail"
              sizes="(max-width: 479px) 74vw, (max-width: 767px) 77vw, (max-width: 991px) 78vw, (max-width: 1279px) 87vw, (max-width: 1439px) 88vw, 1248px"
              width={1248}
              height={702}
            />
          </div>
        </header>
        <div className={"prose max-w-none prose-img:rounded-lg prose-img:w-full prose-img:h-full prose-img:object-cover " + paragraphClasses + " " + listClasses}>
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>

      </section>
    </main>
  );
}
