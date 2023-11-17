import React from "react";
import { useNavigate } from "react-router-dom";

export const PagesList = ({ pages, setArticle, setActiveArticle }) => {
  function handleClick(pageInfo) {
    setActiveArticle(true);
    setArticle(pageInfo);
    // console.log(pageInfo);
    navigate(`${pageInfo.slug}`);
  }

  const navigate = useNavigate();

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
