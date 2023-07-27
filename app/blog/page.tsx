import { join } from "path";
import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { formatDate } from "@/utils/date-helper";

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
  // read route params
  return {
    title: "Activepieces - Blogs",
    description: "Learn business automation from the top resources - The Automatic Organization",
    icons: "/favicon.ico",
  };
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className=" rounded overflow-hidden shadow-lg border border-black rounded-md transition duration-500 ease-in-out transform hover:-translate-y-1">
        <div className="h-[220px] md:w-[469px] w-full relative">
          <Image
            src={post.meta.thumbnail}
            alt="Blog thumbnail"
            fill={true}
            className="object-cover w-full"
          />
        </div>
        <div className="relative py-4 px-4 bg-white text-black border-t border-solid border-[#000000] min-h-[190px] ">
          <div className="text-h4-sm lg:text-h5-lg !leading-[31.2px] mb-2 max-w-[358px] md:w-[399px]">{post.meta.title}</div>
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
    <main className="bg-white ">
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
              <div className="flex flex-wrap gap-5 justify-center md:justify-start ">
                {/* Add justify-items-center to center grid items horizontally */}
                {posts.slice(0, 4).map((post) => (
                  <div key={post.slug}>
                    <BlogCard post={post} />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-start mt-5">
              <div className="flex flex-wrap gap-5  justify-center md:justify-start ">
                {/* Add justify-items-center to center grid items horizontally */}
                {posts.slice(4, 8).map((post) => (
                  <div key={post.slug}>
                    <BlogCard post={post} />
                  </div>


                ))}
              </div>
            </div>
            <div className="bg-black overflow-hidden container   mx-auto rounded-[12px]  lg:py-[61px] p-[30px] lg:px-[50px] mt-5 flex flex-wrap lg:flex-nowrap">
              <div className="flex flex-col gap-[25px] lg:gap-[51px]">
                <div className="text-[34px] w-[298px] md:w-[initial] text-white lg:items-center  font-bold leading-[40.80px] flex-col-reverse md:flex-row flex  gap-[20px] tracking-wide">
                  Community edition <div className="flex items-center"><div className="text-[16px] flex-inline whitespace-nowrap lg:text-[22px] !leading-[26.4px] font-normal tracking-wide px-[15px] py-[10px] lg:px-[25px] lg:py-[14px] text-[#06FFB4] border border-solid border-[#06FFB4] rounded-full"> We are <b>open source</b> </div></div>
                </div>
                <div className="text-white text-h6-sm md:text-h6-lg">
                  Activepieces is an open core software, you can self host it on your machine for free. Our cloud version is built on this core but has more features.
                </div>
                <Link href="https://github.com/activepieces/activepieces" target="_blank" rel="noopener noreferer" className="flex gap-[25px]  items-center">
                  <Image src="/github_white.svg" alt="github" width={50} height={50} className="w-[30px] lg:w-[50px]"></Image>
                  <div className="text-h6-sm font-bold lg:text-h3-lg text-white">
                    Visit GitHub
                  </div>

                  <Image src="/arrow_white.svg" alt="arrow" width={33.3} height={16.6}>

                  </Image>
                </Link>
              </div>
            </div>
            <div className="flex justify-start mt-5">
              <div className="flex flex-wrap gap-5  justify-center md:justify-start ">
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
    </main>
  );
}
