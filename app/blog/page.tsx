import { join } from "path";
import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

type BlogPost = {
  link: string;
  meta: {
    title: string;
    author: string;
    thumbnail: string;
  };
};

type Category = {
  title: string;
  posts: string[];
};

const categories: Record<string, Category> = {
  handbook: {
    title: "Handbook",
    posts: ["core-values.mdx", "business-model.mdx", "product-principles.mdx"],
  },
  blog: {
    title: "Blog",
    posts: []
  },
  engineering: {
    title: "Engineering",
    posts: ['embracing-simplicity.mdx'],
  }
};

export async function generateMetadata(

): Promise<Metadata> {
  // read route params
 
  return {
    title: "Activepieces - Blogs",
    description: "Learn business automation from the top resources - The Automatic Organization",
    authors: {url:"www.activepieces.com", name:"Activepieces"},
    icons: "/favicon.ico",
  }
}




function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={post.link}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1">
        <div className="relative">
          <Image
            src={post.meta.thumbnail}
            alt="Blog thumbnail"
            width={400}
            height={400}
          />
          <div className="absolute bottom-0 left-0 right-0 py-8 px-4 bg-white text-black border border-black rounded-md">
            <div className="font-bold text-xl mb-2">{post.meta.title}</div>
            <p className="text-base">{post.meta.author}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default async function BlogIndex() {
  // Fetch data
  const posts: BlogPost[] = [];
  const categoriesNames: string[] = Object.keys(categories);
  const docsDirectory = join(process.cwd(), "content");
  for (const category of categoriesNames) {
    for (const fileName of categories[category].posts) {
      const fullPath = join(docsDirectory, fileName);
      const fileContents = await fs.promises.readFile(fullPath, "utf8");
      const { data } = matter(fileContents);
      const meta = {
        title: data.title,
        author: data.author,
        thumbnail: `${data.thumbnail}`,
      };
      const link = `/blog/${fileName.replace(/\.mdx?$/, "")}`;
      posts.push({ link, meta });
    }
  }

  return (
    <div className="bg-white">
      <main className="container mx-auto md:px-0">
        {/* Centered Title */}
        <h1 className="text-5xl font-bold text-center w-full">Blogs</h1>

        {/* Centered Blog Grid */}
        <div className="flex justify-center mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-8 mt-[60px] w-3/4">
            {posts.map((post) => (
              <BlogCard key={post.link} post={post} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
