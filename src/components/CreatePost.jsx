import React, { useContext, useState } from "react";
import { PostListMethods } from "../store/PostListContext";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const { addPost } = useContext(PostListMethods);
  const navigate = useNavigate();
  const [isValue, setValue] = useState("");
  const [bodyInput, setBodyInput] = useState("");
  const [isTitle, setTitle] = useState("");
  const [isTags, setTags] = useState("");

  const isFormValid = isValue && bodyInput && isTitle && isTags;

  const handleOnUserNameChange = (e) => {
    setValue(e.target.value);
  };

  const handleOnBodyContentChange = (e) => {
    setBodyInput(e.target.value);
  };

  const handleOnTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleOnTagsChange = (e) => {
    setTags(e.target.value.split(","));
  };

  const handleOnButtonClick = (e) => {
    e.preventDefault();

    if (isTitle && bodyInput && isTags && isValue) {
      addPost(isTitle, bodyInput, isTags, isValue);
      setValue("");
      setTitle("");
      setBodyInput("");
      setTags("");
    }
    navigate("/");
  };

  return (
    <form className="post-form">
      <div className="mb-3">
        <label htmlFor="user-name" className="form-label">
          User Name
        </label>
        <input
          type="text"
          className="form-input"
          id="user-name"
          value={isValue}
          placeholder="Enter your Name"
          onChange={handleOnUserNameChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-input"
          id="title"
          placeholder="Post Title"
          value={isTitle}
          onChange={handleOnTitleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="content" className="form-label">
          Post Content
        </label>
        <input
          type="text"
          className="form-input"
          id="content"
          placeholder="Tell us more about it "
          value={bodyInput}
          onChange={handleOnBodyContentChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="content" className="form-label">
          Post Tags
        </label>
        <input
          type="text"
          className="form-input"
          id="content"
          value={isTags}
          placeholder="Plese use comma to separate tags"
          onChange={handleOnTagsChange}
        />
      </div>

      <button
        type="submit"
        disabled={!isFormValid}
        className="btn btn-primary sumbit-btn"
        onClick={handleOnButtonClick}
      >
        Create Post
      </button>
    </form>
  );
};

export default CreatePost;
