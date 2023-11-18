import { Page } from "../components/Page";
import apiURL from "../api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Article() {
  const [article, setArticle] = useState({});
  const { slug } = useParams();
  const navigate = useNavigate();

  const formatDate = new Date(article.createdAt);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  };
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
      <br></br>
      <p>Tag(s):</p>
      {article.tags && article.tags.map((tag, i) => <p key={i}>{tag.name}</p>)}
      <br></br>
      {article.createdAt && (
        <p>Created at: {formatDate.toLocaleDateString(undefined, options)}</p>
      )}
      {article.content && <p>{article.content}</p>}
      <button onClick={handleClick}>Back to main</button>
    </>
  );
}
