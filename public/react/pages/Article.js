import { Page } from "../components/Page";
import apiURL from "../api";
import { useParams } from "react-router-dom";

export default function Article() {
  const { slug } = useParams();
  console.log(slug);

  async function getArticle() {
    const response = await fetch(`${apiURL}/wiki/${slug}`);
    const data = await response.json();
    return data;
  }
  return (
    <Page />
  );
}
