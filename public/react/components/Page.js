import React from "react";

export const Page = ({article}) => {
  return (
    <>
      <h3>{article.title}</h3>
      <p>{article.content}</p>
    </>
  );
};
