import { createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import React from "react";
import { Homepage } from "./pages/HomePage";
import Article from "./pages/Article";

export default router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      { index: true, element: <Homepage /> },
      {
        path: "add-article",
        element: <h1>Add article page</h1>,
      },
      {
        path: ":slug",
        element: <Article/>
      }
    ],
  },
]);
