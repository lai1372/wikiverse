import React from "react";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();

  function allArticles() {
    navigate("/");
  }

  function addArticle() {
    navigate("/add-article");
  }

  return (
    <nav>
      <ul>
        <li onClick={allArticles}>All articles</li>
        <li onClick={addArticle}> Add an article</li>
      </ul>
    </nav>
  );
}
