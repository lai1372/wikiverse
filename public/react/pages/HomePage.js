import React, { useState, useEffect } from "react";
import { PagesList } from "../components/PagesList";
import { Page } from "../components/Page";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const Homepage = () => {
  const [pages, setPages] = useState([]);
  const [activeArticle, setActiveArticle] = useState(false);
  const [article, setArticle] = useState({});

  async function fetchPages() {
    try {
      const response = await fetch(`${apiURL}/wiki`);
      const pagesData = await response.json();
      setPages(pagesData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  useEffect(() => {
    fetchPages();
  }, []);

  return (
    <>
      <main>
        {!activeArticle ? (
          <>
            <h2>An interesting 📚</h2>
            <PagesList
              setActiveArticle={setActiveArticle}
              setArticle={setArticle}
              pages={pages}
            />
          </>
        ) : (
          <Page article={article} />
        )}
      </main>
    </>
  );
};

//add onlcick for each of the pagelist items, in the onlcick handler, set active article to true / to the article itself

//add single page to bottom of app in a ternary statement - if active article is true, render the single page, if not, render all pages

//create a nav bar with add pages
