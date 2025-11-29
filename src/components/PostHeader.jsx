import React, { useContext, useState } from "react";
import { PostListMethods } from "../store/PostListContext";
import { Link, useLocation } from "react-router-dom";

const PostHeader = () => {
  const location = useLocation();

  const [searchPostText, setSearchPost] = useState("");
  const { searchPost, userPost } = useContext(PostListMethods);

  const handleOnSearchInput = (e) => {
    setSearchPost(e.target.value);
  };

  const isMatched = userPost.some((post) =>
    post.title.toLowerCase().includes(searchPostText.toLowerCase().trim())
  );

  const postFilter = (e) => {
    e.preventDefault();
    searchPost(searchPostText);
  };

  return (
    <header className="p-3 text-bg-dark header">
      <div className="container">
        <div className="d-flex divBox">
          <div className="post-search-input">
            <input
              type="search"
              className="from-inputs"
              placeholder="Search post by title"
              aria-label="Search"
              value={searchPostText}
              onChange={handleOnSearchInput}
            />
          </div>
          <div className="text-end">
            <button
              type="button"
              className="btn btn-warning search"
              disabled={!isMatched || searchPostText.trim() === ""}
              onClick={postFilter}
            >
              Search
            </button>
          </div>
        </div>

        <div className="link-container">
          <div className="links">
            <div className="nav-item">
              <Link
                to="/"
                className={`nav-link text-white ${
                  location.pathname === "/" && "active"
                }`}
                aria-current="page"
              >
                <svg
                  className="bi pe-none me-2"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <use xlinkHref="#home"></use>
                </svg>
                Home
              </Link>
            </div>
            <div>
              <Link
                to="/create-post"
                className={`nav-link text-white ${
                  location.pathname === "/create-post" && "active"
                }`}
              >
                <svg
                  className="bi pe-none me-2"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <use xlinkHref="#speedometer2"></use>
                </svg>
                Creat Post
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PostHeader;
