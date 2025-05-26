export interface GetAllBlogsResponse {
  blogList: BlogList[];
  success: string;
}

export interface BlogList {
  id: string;
  blogId: string;
  blogImage: string;
  blogDate: string;
  blogTitle: string;
  blogDescription: string;
  content: string;
}