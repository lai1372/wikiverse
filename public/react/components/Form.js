import { useState } from "react";
import apiURL from "../api";

export default function Form() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [authorEmail, setAuthorEmail] = useState("");
  const [tags, setTags] = useState([]);

  function slugGenerator(string) {
    return string
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }
  async function postArticle() {
    const response = await fetch(`${apiURL}/wiki`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        content: content,
        name: authorName,
        email: authorEmail,
        slug: slugGenerator(title),
        tags: tags,
      }),
    });
    const data = await response.json();
    console.log(data)
  }
  function handleSubmit(e) {
    e.preventDefault();
    postArticle();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </label>
        <label>
          Content:
          <input
            type="text"
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </label>
        <label>
          Author name:
          <input
            type="text"
            onChange={(e) => {
              setAuthorName(e.target.value);
            }}
          />
        </label>
        <label>
          Author email:
          <input
            type="text"
            onChange={(e) => {
              setAuthorEmail(e.target.value);
            }}
          />
        </label>
        <label>
          Tags:
          <input
            type="text"
            onChange={(e) => {
              setTags(e.target.value);
            }}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
