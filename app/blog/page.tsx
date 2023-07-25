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
      <div className="max-w-sm rounded overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1">
        <div style={{ width: 400, height: 200 }} className="relative">
          <Image
            src={post.meta.thumbnail}
            alt="Blog thumbnail"
            fill={true}
          />
        </div>
        <div className="relative py-4 px-4 bg-white text-black border border-black rounded-md">
          <div className="font-bold text-xl mb-2">{post.meta.title}</div>
          <p className="text-base">{post.meta.author} | Published On {post.meta.publishedOn}</p>
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
    <main className="bg-white">
      <div className=" container mx-auto md:px-0 pt-[80px]">
        {/* Centered Title */}
        <h1 className="text-5xl font-bold text-center w-full">Blogs</h1>

        {/* Centered Blog Grid */}
        <div className="flex justify-center mt-8">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mt-8 mt-[60px] w-3/4 justify-items-center">
            {/* Add justify-items-center to center grid items horizontally */}
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
