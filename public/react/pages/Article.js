import { Page } from "../components/Page";
import apiURL from "../api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Article() {
  const [article, setArticle] = useState({});
  const { slug } = useParams();
  //   console.log(slug);
  const navigate = useNavigate();

  async function getArticle() {
    const response = await fetch(`${apiURL}/wiki/${slug}`);
    const data = await response.json();
    console.log(data);
    setArticle(data);
    return data;
  }

  function handleClick() {
    navigate("/");
  }

  useEffect(() => {
    getArticle();
  }, []);

  return (
    <>
      <h1>{article?.title}</h1>
      <p>{article?.content}</p>
      <button onClick={handleClick}>Back to main</button>
    </>
  );
}
