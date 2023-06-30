import { join } from "path";
import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";

type BlogPost = {
  slug: string;
  meta: { title: string; description: string; thumbnail: string };
};

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href="/blogs/hello-world">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="relative">
          <Image
            src={`/blogs/` + post.meta.thumbnail}
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

export default function BlogIndex({ posts }: { posts: BlogPost[] }) {
  return (
    <main className="container mx-auto px-3 py-4 md:px-0 mt-[50px]">
      <h1 className="text-5xl font-bold text-center w-full">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 mt-[60px]">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const docsDirectory = join(process.cwd(), "content", "blogs");
  const fileNames = fs.readdirSync(docsDirectory);

  const posts = fileNames.map((fileName) => {
    const fullPath = join(docsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8").toString();
    const { data } = matter(fileContents);
    const meta = {
      title: data.title,
      description: data.description,
      thumbnail: data.thumbnail,
    };
    const slug = fileName.replace(/\.mdx?$/, "");

    return { slug, meta };
  });

  return {
    props: {
      posts,
    },
  };
}
