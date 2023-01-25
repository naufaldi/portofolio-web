import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';

type PostProps = {
  frontmatter: {
    title: string;
    description: string;
    category?: string;
    date: string;
    tags: string[];
    bannerImage: string;
    url: string;
  };
  content: string;
};

// The page for each post
export default function Post({ frontmatter, content }: PostProps) {
  const { title, category, date, bannerImage, tags } = frontmatter;

  return (
    <main>
      <img src={bannerImage} alt={title} />
      <h1>{title}</h1>
      <h2> {date}</h2>
      <h3>
        {category} || {tags.join()}
      </h3>
      <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
    </main>
  );
}

// Generating the paths for each post
export async function getStaticPaths() {
  // Get list of all files from our posts directory
  const files = fs.readdirSync('src/contents/project');
  // Generate a path for each one
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }));
  // return list of paths
  return {
    paths,
    fallback: false,
  };
}

// Generate the static props for the page
export async function getStaticProps({ params: { slug } }: any) {
  const fileName = fs.readFileSync(`src/contents/project/${slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}
