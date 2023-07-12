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
    description: string;
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
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
            <div className="font-bold text-xl mb-2">{post.meta.title}</div>
            <p className="text-gray-300 text-base">{post.meta.description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default async function BlogIndex() {
  // fetch data
  const posts: BlogPost[] = [];
  const categoriesNames: string[] = Object.keys(categories);
  const docsDirectory = join(process.cwd(), "content");
  for(const category of categoriesNames) {
    for(const fileName of categories[category].posts) {
      const fullPath = join(docsDirectory, fileName);
      const fileContents = await fs.promises.readFile(fullPath, "utf8");
      const { data } = matter(fileContents);
      const meta = {
        title: data.title,
        description: data.description,
        thumbnail: `${data.thumbnail}`,
      };
      const link = `/blog/${fileName.replace(/\.mdx?$/, "")}`;
      posts.push({ link, meta });
    }
  }
  console.log(posts);
  return (
    <main className="container mx-auto px-3 py-4 md:px-0 mt-[50px]">
      <h1 className="text-5xl font-bold text-center w-full">Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 mt-[60px]">
        {posts.map((post) => (
          <BlogCard key={post.link} post={post} />
        ))}
      </div>
    </main>
  );
}


