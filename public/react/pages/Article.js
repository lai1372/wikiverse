import { Page } from "../components/Page";
import apiURL from "../api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Article() {
  const [article, setArticle] = useState({});
  const { slug } = useParams();
  const navigate = useNavigate();

  async function getArticle() {
    const response = await fetch(`${apiURL}/wiki/${slug}`);
    const data = await response.json();
    setArticle(data);
  }

  useEffect(() => {
    getArticle();
  }, []);

  function handleClick() {
    navigate("/");
  }
  return (
    <>
      {article.title && <h1>{article.title}</h1>}
      {article.author && <p>{article.author.name}</p>}
      {article.createdAt && <p>{article.createdAt}</p>}
      {article.content && <p>{article.content}</p>}
      <button onClick={handleClick}>Back to main</button>
    </>
  );
}
