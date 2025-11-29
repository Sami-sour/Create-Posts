import { useContext } from "react";

import { PostListMethods } from "../store/PostListContext";
import PostCard from "./PostCard";

const Post = () => {
  const { userPost } = useContext(PostListMethods);
  return (
    <>
      <div className="post-card-container">
        {userPost.map((post, index) => (
          <PostCard post={post} key={index} />
        ))}
      </div>
    </>
  );
};

export default Post;
