import { useEffect, useState } from "react";
import { PostListMethods } from "./PostListContext";

const DEFAULT_VALUE = [];

const PostListProvider = ({ children }) => {
  const [userPost, setUserPost] = useState(DEFAULT_VALUE);
  const [fetching, setFetching] = useState(false);
  const [postFilter, setPostFilter] = useState(DEFAULT_VALUE);

  const addPost = (title, content, tags) => {
    const addNewPost = [
      { id: crypto.randomUUID(), title, body: content, tags },
      ...userPost,
    ];
    setUserPost(addNewPost);
    setPostFilter(addNewPost);
  };

  useEffect(() => {
    if (userPost.length === 0) {
      setFetching(true);
      fetch("https://dummyjson.com/posts")
        .then((res) => res.json())
        .then((data) => {
          initialPost(data.posts);
          setFetching(false);
        });
    }
  }, [userPost]);

  const deletePost = (id) => {
    const deleteEachPost = userPost.filter((eachpost) => eachpost.id !== id);
    setUserPost(deleteEachPost);
    setPostFilter(deleteEachPost);
  };

  const initialPost = (post) => {
    const allPost = [...userPost, ...post];
    setUserPost(allPost);
    setPostFilter(allPost);
  };

  const searchPost = (text) => {
    if (text.trim() === "") {
      setPostFilter(userPost);
      return;
    }

    const postSearched = userPost.filter((post) =>
      post.title.toLowerCase().includes(text.toLowerCase().trim())
    );
    setPostFilter(postSearched);
  };

  return (
    <>
      <PostListMethods.Provider
        value={{
          userPost: postFilter,
          addPost,
          deletePost,
          initialPost,
          searchPost,
          fetching,
        }}
      >
        {children}
      </PostListMethods.Provider>
    </>
  );
};

export default PostListProvider;
