import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PostHeader from "../components/PostHeader";
import PostSideBar from "../components/PostSideBar";
import PostFooter from "../components/PostFooter";
import PostListProvider from "../store/post-list-store";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  const [selectTab, setSeletedTab] = useState("/");

  return (
    <>
      <PostListProvider>
        <div className="post-container">
          <PostSideBar setSeletedTab={setSeletedTab} selectTab={selectTab} />
          <div className="post-content">
            <PostHeader />

            <Outlet />
            <PostFooter />
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
