import React from "react";

export default function Nav() {
  function allArticles() {}

  function addArticle() {}

  return (
    <nav>
      <ul>
        <li onClick={() => allArticles}>All articles</li>
        <li onClick={() => addArticle}> Add an article</li>
      </ul>
    </nav>
  );
}
