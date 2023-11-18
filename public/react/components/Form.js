import { useState } from "react";

export default function Form({ setNewArticle, setNewUser, setNewTags }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [authorEmail, setAuthorEmail] = useState("");
  const [tags, setTags] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(title, authorName, authorEmail, tags, content);
    setNewArticle({
      title: title,
      content: content,
      slug: title,
      status: open,
    });
    setNewUser({
      name: authorName,
      email: authorEmail,
    });
    setNewTags(tags);
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
              setNewTags(e.target.value);
            }}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
