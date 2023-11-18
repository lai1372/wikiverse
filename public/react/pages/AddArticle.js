import Form from "../components/Form";
import { useState } from "react";

export default function AddArticle() {
  const [newArticle, setNewArticle] = useState({
    title: "",
    slug: "",
    content: "",
    status: open,
  });
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
  });

  const [newTags, setNewTags] = useState([]);

  return (
    <>
      <h1>Add an article</h1>
      <Form
        setNewArticle={setNewArticle}
        setNewUser={setNewUser}
        setNewTags={setNewTags}
      />
    </>
  );
}
