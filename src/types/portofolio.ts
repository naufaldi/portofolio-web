export interface portofolioProps {
  posts: Array<{
    slug: string;
    frontmatter: {
      title: string;
      description: string;
      category?: string | undefined;
      date: string;
      tags: string[];
      bannerImage: string;
      url: string;
    };
  }>;
}
export interface snippetProps {
  posts: Array<{
    slug: string;
    frontmatter: {
      title: string;
      description: string;
      tags: string[];
    };
  }>;
}

export type TBaseFrontMatter = {
  title: string;
  description: string;
  caption?: string;
};

export type TPostFrontMatter = TBaseFrontMatter & {
  date: string;
  lang: 'id' | 'en';
  tags: Array<string>;
  category: string;
};
