import React from "react";

export const PagesList = ({ pages, setArticle, setActiveArticle }) => {
  function handleClick(pageInfo) {
    setActiveArticle(true);
    setArticle(pageInfo);
    console.log(pageInfo)
  }

  return (
    <>
      {pages.map((page, idx) => {
        return (
          <p key={idx} onClick={() => handleClick(page)}>
            {page.title}
          </p>
        );
      })}
    </>
  );
};
