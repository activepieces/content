import { join } from "path";
import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { formatDate } from "@/utils/date-helper";
import { AutomateWithActivepieces } from "../../components/animated-curtains/AutomateWithActivepieces";

type BlogPost = {
  slug: string;
  meta: {
    title: string;
    author: string;
    publishedOn: string,
    thumbnail: string;
  };
};

type Category = {
  title: string;
};

export async function generateMetadata(): Promise<Metadata> {
  const title = "Blog - Activepieces";
  const description = "Learn how to automate your business with ChatGPT, Slack, Google Sheets and many other apps. Activepieces is the leading open source business automation tool.";
  return {
    title: title,
    description: description,
    icons: "/favicon.ico",
    openGraph: {
      title: title,
      description: description,
      siteName: "Activepieces",
      images: [
        {
          url: "https://www.activepieces.com/meta1.png",
          width: 1200,
          height: 630,
          alt: "Activepieces Blog",
        },
      ],
      url: "https://www.activepieces.com/blog",
    }
  };
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="flex flex-col h-[460px] rounded overflow-hidden shadow-lg border border-black rounded-md transition duration-500 ease-in-out transform hover:-translate-y-1">
        <div className="h-[220px] md:w-[469px] w-full relative">
          <Image
            src={post.meta.thumbnail}
            alt="Blog thumbnail"
            fill={true}
            className="object-cover w-full"
          />
        </div>

        <div className="flex flex-col flex-grow relative py-4 px-4 bg-white text-black border-t border-solid border-[#000000] min-h-[190px] ">
          <div className="text-h4-sm lg:text-h5-lg !leading-[31.2px] mb-2 max-w-[358px] md:w-[399px]">{post.meta.title}</div>
          <div className="flex-grow"></div>
          <p className="text-black text-lg font-normal leading-snug tracking-wide">{post.meta.author} | Published On {post.meta.publishedOn}</p>
        </div>
      </div>
    </Link>
  );
}

export default async function BlogIndex() {
  // Fetch data
  const posts: BlogPost[] = [];
  const docsDirectory = join(process.cwd(), "content", "blog");
  const files = fs.readdirSync(docsDirectory);

  for (const fileName of files) {
    const fullPath = join(docsDirectory, fileName);
    const fileContents = await fs.promises.readFile(fullPath, "utf8");
    const { data } = matter(fileContents);
    const meta = {
      title: data.title,
      author: data.author,
      publishedOn: formatDate(data.publishedOn),
      thumbnail: `${data.thumbnail}`,
    };
    const slug = fileName.replace(/\.mdx?$/, "");
    posts.push({ slug, meta });
  }


  return (
    <><main className="bg-white ">
      <div className=" container px-4 mx-auto lg:px-0 py-[80px]">
        {/* Centered Title */}
        <div className="flex gap-[85px]">
          <div className="hidden md:block w-[238px] ">
            <div className="text-black text-[22px] font-bold leading-[60px] tracking-wide mb-[40px]">
              Categories
            </div>
            <div>
              <div className="px-4 text-[22px] font-normal leading-7 tracking-wide text-primary border-l-2 border-solid border-primary">
                All blogs
              </div>
            </div>
          </div>
          <div className="md:w-[471px] lg:w-[964px]">
            <div className="flex justify-start"> <h1 className="text-5xl    font-bold ">Blogs</h1> </div>
            {/* Centered Blog Grid */}
            <div className="flex justify-start mt-8">
              <div className="flex flex-wrap gap-4 justify-center md:justify-start ">
                {/* Add justify-items-center to center grid items horizontally */}
                {posts.slice(0, 4).map((post) => (
                  <div key={post.slug}>
                    <BlogCard post={post} />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-start mt-5">
              <div className="flex flex-wrap gap-4  justify-center md:justify-start ">
                {/* Add justify-items-center to center grid items horizontally */}
                {posts.slice(4, 8).map((post) => (
                  <div key={post.slug}>
                    <BlogCard post={post} />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-start mt-5">
              <div className="flex flex-wrap gap-4  justify-center md:justify-start ">
                {/* Add justify-items-center to center grid items horizontally */}
                {posts.slice(8).map((post) => (
                  <div key={post.slug}>
                    <BlogCard post={post} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </main><AutomateWithActivepieces></AutomateWithActivepieces></>
  );
}
