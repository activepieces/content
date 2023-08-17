import { join } from "path";
import fs from "fs";
import matter from "gray-matter";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Image from "next/image";
import { Metadata } from "next";
import { NavigationProps } from "../../../components/navigationProps";
import Link from "next/link";
import { formatDate } from "@/utils/date-helper";
import { createClient } from "@supabase/supabase-js";

export interface Blog {
  title: string;
  description: string;
  content: string;
  thumbnail: string;
  author: string;
  publishedOn: string;
}
async function readBlogData(blogName: string, userPassword: string | undefined): Promise<Blog> {
  const docsDirectory = join(process.cwd(), "content", "blog");
  const fullPath = join(docsDirectory, blogName + ".mdx");
  if (!fs.existsSync(fullPath)) {
    const supabase = createClient('https://ywkdmxjwsazhcvocivgw.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3a2RteGp3c2F6aGN2b2Npdmd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA0NTYyNjYsImV4cCI6MTk5NjAzMjI2Nn0.WaRI99I0gVOmNXlLp_V2gOz0oaCRnsMNO9X1xbFWpZ0')
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('slug', blogName)
    if (error) {
      throw error
    }
    if (!data || data.length === 0) {
      throw new Error('Blog not found')
    }
    const blog = data[0]
    if(blog.status !== 'published') {
      const password = process.env.BLOG_PASSWORD
      if(password !== userPassword) {
        throw new Error('Blog not found')
      }
      
    }
    return {
      title: blog.title,
      content: blog.content,
      author: blog.author,
      publishedOn: formatDate(blog.publishedOn),
      description: blog.description,
      thumbnail: blog.main_image,
    }
  }
  const fileContents = await fs.promises.readFile(fullPath, "utf8");

  const result = matter(fileContents);

  return {
    title: result.data.title,
    description: result.data.description,
    content: result.content,
    author: result.data.author,
    thumbnail: result.data.thumbnail,
    publishedOn: formatDate(result.data.publishedOn),
  }
}

export async function generateMetadata({
  params,
  searchParams,
}: NavigationProps): Promise<Metadata> {
  const blogName = params.id;
  const password = searchParams.password;
  const { title, description, thumbnail, author } = await readBlogData(blogName, password);

  return {
    title: title + ' - Activepieces',
    description: description,
    openGraph: {
      title: title + ' - Activepieces',
      description: description,
      siteName: "Activepieces",
      images: [
        {
          url: thumbnail,
          width: 1200,
          height: 630,
          alt: "Activepieces Blog",
        },
      ],
      url: `www.activepieces.com/blog/${blogName}`,
    },
    authors: {
      url: `www.activepieces.com/blog/${blogName}`,
      name: author,
    },
    icons: "/favicon.ico",
  };
}

export default async function BlogPost({ params, searchParams }: NavigationProps) {
  const blogName = params.id;
  const password = searchParams.password;

  const { publishedOn, content, title, thumbnail, author } = await readBlogData(blogName, password);
  return (
    <main className="bg-white w-full">
      <section className="container mx-auto px-3 py-[80px] md:px-0  mx-auto ">
        <nav className="text-lg mb-[35px]">
          <Link href="/blog" className="no-underline">
            {/* Apply your custom styles for the link */}
            <span className="text-primary no-underline hover:underline cursor-pointer">
              Blogs
            </span>
          </Link>{" "}
        </nav>
        <header className="mb-[35px] mx-auto text-left">
          <h1 className="text-h1-sm lg:text-h1-lg font-bold mb-[35px]">
            {title}
          </h1>
          <div className="text-black text-lg font-normal leading-snug tracking-wide mb-[35px]">
            {author} | Published on {publishedOn}
          </div>
          <div>
            <Image
              className="rounded-lg w-full h-full object-cover"
              src={thumbnail}
              alt="Blog thumbnail"
              sizes="(max-width: 479px) 74vw, (max-width: 767px) 77vw, (max-width: 991px) 78vw, (max-width: 1279px) 87vw, (max-width: 1439px) 88vw, 1248px"
              width={1248}
              height={702}
            />
          </div>
        </header>
        <div
          className={
            "prose max-w-none prose-a:text-primary prose-img:rounded-lg prose-img:w-full prose-img:h-full prose-img:object-cover prose-h1:text-h1-sm prose-h1:lg:text-h1-sm prose-h2:text-h2-sm prose-h2:lg:text-h2-sm prose-h3:text-h3-sm prose-h3:lg:text-h3-sm prose-h4:text-h4-sm prose-h4:lg:text-h4-sm prose-h5:text-h5-sm prose-h5:lg:text-h5-sm prose-h6:text-h6-sm prose-h6:lg:text-h6-sm prose-p:text-h6-sm prose-p:lg:text-h6-lg prose-li:text-h6-sm prose-li:lg:text-h6-lg prose-ol:text-h6-sm prose-ol:lg:text-h6-lg prose-ul:text-h6-sm prose-ul:lg:text-h6-lg"
          }
        >
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </section>
    </main>
  );
}
