export interface GetAllBlogsResponse {
  blogList: BlogList[];
  success: string;
}

export interface BlogList {
  id: number;
  blogId: string;
  category: string;
  blogTitle: string;
  blogDescription: string;
}