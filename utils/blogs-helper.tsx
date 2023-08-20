import { createClient } from "@supabase/supabase-js";
import { formatDate } from "@/utils/date-helper";
import { join } from "path";
import fs from "fs";
import matter from "gray-matter";

const supabaseKey = process.env.SUPABASE_ANON_KEY!
const supabaseUrl = process.env.SUPABASE_URL!

const supabase = createClient(supabaseUrl, supabaseKey)

export type BlogPost = {
    slug: string;
    meta: {
      title: string;
      author: string;
      publishedOn: string,
      thumbnail: string;
    };
  };

async function getFirebaseBlogs(): Promise<BlogPost[]> {
    const { data, error } = await supabase
      .from('blogs')
      .select('*').eq('status', 'published')
      .order('created_at', { ascending: false })
  
    if (error) {
      return []
    }
    return data.map((blog) => {
      return {
        slug: blog.slug,
        meta: {
          title: blog.title,
          author: blog.author,
          publishedOn: formatDate(blog.created_at),
          thumbnail: `${blog.main_image}`,
        }
      }
    });
  }
  
  async function getLocalBlogs() {
    let posts: BlogPost[] = [];
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
    return posts;
  }
  

  export const getBlogs = async () => {
    const localBlogs =  await getLocalBlogs();
    const firebaseBlogs = await getFirebaseBlogs()
    const posts = [...localBlogs, ...firebaseBlogs].sort((a, b) => {
      return new Date(b.meta.publishedOn).getTime() - new Date(a.meta.publishedOn).getTime()
    })
    return posts
  }