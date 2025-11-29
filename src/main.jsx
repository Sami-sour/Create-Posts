import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./router/App.jsx";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Post from "./components/Post.jsx";
import CreatePost from "./components/CreatePost.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Post /> },
      {
        path: "/create-post",
        element: <CreatePost />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
