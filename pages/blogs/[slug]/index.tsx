import { marked } from 'marked';
import { useRouter } from 'next/router';
import { join } from 'path';
import fs from 'fs';

export default function BlogPost({ content }: {content: string}) {
  const router = useRouter();

  console.log(content);
  // Render the blog post content using the `marked` library
  const renderedContent = marked(content);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: renderedContent }} />
    </div>
  );
}

export async function getServerSideProps(context: { query: { slug: string; }; }) {
  // Fetch the markdown content for the requested blog post
  const { slug } = context.query;
  const docsDirectory = join(process.cwd(), 'content', 'blogs');
  const fullPath = join(docsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  return {
    props: {
      content: fileContents,
    },
  };
}

