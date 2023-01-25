import fs from 'fs';
import matter from 'gray-matter';

export const getSnippetPost = () => {
  const files = fs.readdirSync('src/contents/snippet');

  // get frontmatter & slug from each post
  const post = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(
      `src/contents/snippet/${fileName}`,
      'utf-8'
    );
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });
  return post;
};
