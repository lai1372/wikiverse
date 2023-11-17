import { RouterProvider } from "react-router-dom";
import Router from "./Router";
import React from "react";

export default function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={Router}></RouterProvider>
    </React.StrictMode>
  );
}

//add onlcick for each of the pagelist items, in the onlcick handler, set active article to true / to the article itself

//add single page to bottom of app in a ternary statement - if active article is true, render the single page, if not, render all pages

//create a nav bar with add pages
