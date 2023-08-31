export interface Post {
  id: string;
  type: string;
  title: string;
  content: string;
  author: string;
  view: Number;
  created_at: string;
  updated_at: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
}

export interface SendPost
  extends Omit<Post, "id" | "created_at" | "updated_at"> {}
