import { createArticleHtml } from './common/article.js';
import { PAGES_NAMES } from './utils/constants.js';
import { getLastPathValue, debounce } from './utils/utilMethods.js';

let articles = [];

document.addEventListener("DOMContentLoaded", (event) => {
  const pathName = getLastPathValue(event);
  if (pathName === PAGES_NAMES.home) {
    const BASE_URL = 'https://api.spaceflightnewsapi.net/v4/';
    const ARTICLES_PARAM = 'articles';
    const URL_ARTICLES =  `${BASE_URL}${ARTICLES_PARAM}`;
    const articlesContainerEl = document.querySelector('.articles');
    const paginationContainerEl = document.querySelector('.pagination-container');
    const paginationPreviousEl = document.querySelector('.pagination-previous');
    const paginationNextEl = document.querySelector('.pagination-next');
    const noArticlesMessageEl = document.querySelector('.no-articles');
    const articlesContainer = document.querySelector('.articles');
    // Form
    const inputTitleFilterEl = document.getElementById('title');
    const filterFormEl = document.querySelector('#filter-form');
  
    let nextPaginationUrl = '';
    let previousPagniationUrl = '';
    
    
    const fetchData = async (urlOffset) => {
      const URL = urlOffset || `${URL_ARTICLES}/?limit=10&offset=0`;
    
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
        createArticleHtml(articlesContainerEl, article, PAGES_NAMES.home);
      })
    }


    const enableOrDisableLoadingEl = (enable) => {
      const loadingEl = document.querySelector('.loading-state');
      const isElemActive =  loadingEl.classList.contains('loading-state--visible');
 
      if (enable && isElemActive) {
        return;
      }
      if (enable) {
        loadingEl.classList.add('loading-state--visible');
      }
      else {
        loadingEl.classList.remove('loading-state--visible');
      }
    }
    
    const fetchAndRenderData = async (paginationUrl) => {
      enableOrDisableLoadingEl(true);
      paginationContainerEl.classList.add('not-visible');
      noArticlesMessageEl.classList.remove('visible');
      // Clear article container

      articlesContainer.innerHTML = '';
      try {
        const data = await fetchData(paginationUrl);
        const mappedArticles = mapArticlesObj(data?.results);
        enableOrDisableLoadingEl(false);
        insertArticlesInDom(mappedArticles);
        articles = [...mappedArticles];

        if (mappedArticles.length === 0) {
          noArticlesMessageEl.classList.add('visible');
          paginationContainerEl.classList.add('not-visible');
        } else {
          paginationContainerEl.classList.remove('not-visible');
        }

      } catch(e) {
        insertArticlesInDom([]);
      }
    };
    
    const handlePaginationClick = (paginationUrl) => {
      fetchAndRenderData(paginationUrl);
    };

    const filterTitleCallback = async (event) => {
      const inputValue = event.target.value;
      let newUrl;
      if (inputValue.length) {
         newUrl = `${URL_ARTICLES}/?title_contains=${inputValue}`
      } else {
        newUrl = null;
      }
  
      fetchAndRenderData(newUrl);
    }

    function render() {
      fetchAndRenderData();
    }

    // Event listeners
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

    filterFormEl.addEventListener('submit', (e) => {
      e.preventDefault();
    });

    inputTitleFilterEl.addEventListener('input', debounce(filterTitleCallback, 500));
    
    // Render initial
    render();
  }
});



export { articles };  









