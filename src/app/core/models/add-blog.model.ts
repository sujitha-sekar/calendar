export interface CreateBlogResponse {
  blog: {
    created: string;
    modified: string;
    id: number;
    blogContent: string;
    blogDescription: string;
    blogTitle: string;
    category: string;
  },
  success: true;
}

export interface CreateBlogInput {
  blogTitle: string;
  blogDescription: string;
  blogContent: string;
  category: string;
}