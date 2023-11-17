import React from "react";
{
  /* <Page page={page} key={idx} /> */
}
export const PagesList = ({ pages }) => {
  return (
    <>
      {pages.map((page, idx) => {
        return <p key={idx}>{page.title}</p>;
      })}
    </>
  );
};
