import { createArticleHtml } from './utils.js';

// Cerinte
// Iterare 1.
// - Facem fetch la o lista de articole de spatiu
// - Populam html-ul cu lista noua 
// - Sa adaugam posibilitatea de a o pagina 
    // - Iconita de dreapta stanga
    // - Fetch de 10 in fata sau in spate in functie de click

/// Variable and data declaration

let articles = [];

document.addEventListener("DOMContentLoaded", (event) => {
  const pathName = event.target.location.pathname.split('/').at(-1);
  if (pathName === 'index.html') {
    const BASE_URL = 'https://api.spaceflightnewsapi.net/v4/';
    const ARTICLES_PARAM = 'articles';
    const articlesContainerEl = document.querySelector('.articles');
    const paginationPreviousEl = document.querySelector('.pagination-previous');
    const paginationNextEl = document.querySelector('.pagination-next');
  
    let nextPaginationUrl = '';
    let previousPagniationUrl = '';
    
    
    const fetchData = async (urlOffset) => {
      const URL = urlOffset || `${BASE_URL}${ARTICLES_PARAM}/?limit=10&offset=0`;
    
      try {
        const articlesResponseObj = await fetch(URL);
        const data = await articlesResponseObj.json();
        nextPaginationUrl = data.next;
        previousPagniationUrl = data.previous;
    
        return data;
    
      } catch (error) {
        console.log(error);
      }
    }
    
    const mapArticlesObj = (apiArticlesToMap = []) => {
      const articlesMappedObject = [];
      apiArticlesToMap.forEach(articleToMap => {
        const articleMapped = {
          id: articleToMap.id,
          events: articleToMap.events,
          launches: articleToMap.launches,
          newsSite: articleToMap.news_site,
          publishedAt: articleToMap.published_at,
          summary: articleToMap.summary,
          title: articleToMap.title,
          url: articleToMap.url,
          imageUrl: articleToMap.image_url
        }
        articlesMappedObject.push(articleMapped);
      })
    
      return articlesMappedObject;
    }
    
    const insertArticlesInDom = (articlesList = []) => {
      articlesList.forEach(article => {
        createArticleHtml(articlesContainerEl, article);
      })
    }
    
    
    const fetchAndRenderData = async (paginationUrl) => {
      try {
        const data = await fetchData(paginationUrl);
        const mappedArticles = mapArticlesObj(data?.results);
        insertArticlesInDom(mappedArticles);
        articles = [...mappedArticles];
      } catch(e) {
        console.log(e)
      }
    }
    
    const handlePaginationClick = (paginationUrl) => {
      fetchAndRenderData(paginationUrl);
      const articlesContainer = document.querySelector('.articles');
      articlesContainer.innerHTML = '';
    }
    
    paginationNextEl.addEventListener('click',  () => {
      if (nextPaginationUrl) {
        handlePaginationClick(nextPaginationUrl);
      }
    })
    
    paginationPreviousEl.addEventListener('click', () => {
      if (previousPagniationUrl) {
        handlePaginationClick(previousPagniationUrl);
      }
    })
    
    function render() {
      fetchAndRenderData();
    }
    
    render();
  
    console.log('Loaded');
  }
});


export { articles };  









