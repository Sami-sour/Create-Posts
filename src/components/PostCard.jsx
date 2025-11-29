import React, { useContext, useState } from "react";
import { IoMdHeart } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";

import { BsFillHandThumbsDownFill } from "react-icons/bs";

import { PostListMethods } from "../store/PostListContext";

const PostCard = ({ post }) => {
  const { deletePost } = useContext(PostListMethods);
  const [isLiked, setLiked] = useState(false);
  const [isDislike, setDislike] = useState(false);

  const handleOnHeartIconClick = () => {
    setLiked(!isLiked);
    setDislike(false);
  };

  const handleOnclickDislikeBtn = () => {
    setDislike(!isDislike);
    setLiked(false);
  };
  return (
    <>
      <div className="post-card">
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <textarea
            className="card-text"
            row="4"
            defaultValue={post.body}
          ></textarea>
          <div className="tag-section">
            {(post?.tags || []).map((tag) => (
              <a href="#" className="post-tag" key={tag}>
                {tag}
              </a>
            ))}
          </div>
          <div className="reaction-btn">
            <div className="like-btn">
              <IoMdHeart
                className="heart-icon"
                style={{ color: isLiked ? "red" : "white" }}
                onClick={handleOnHeartIconClick}
              />
            </div>
            <div className="dislike-btn">
              <BsFillHandThumbsDownFill
                className="dislike-icon"
                style={{ color: isDislike ? "yellow" : "white" }}
                onClick={handleOnclickDislikeBtn}
              />
            </div>
          </div>

          <span className="delete-btn">
            <MdDeleteOutline
              className="del-btn"
              onClick={() => deletePost(post.id)}
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default PostCard;
