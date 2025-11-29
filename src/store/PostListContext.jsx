import { createContext } from "react";

const PostValue = {
  userPost: [],
  addPost: () => {},
  deletePost: () => {},
  initialPost: () => {},
  searchPost: () => {},
};

export const PostListMethods = createContext(PostValue);
