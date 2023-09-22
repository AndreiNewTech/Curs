import { getSavedArticlesStorage } from "../utils/storage.js";
import { createArticleHtml } from '../common/article.js';
import { PAGES_NAMES } from '../utils/constants.js';
import { getLastPathValue } from '../utils/utilMethods.js';

document.addEventListener("DOMContentLoaded", (event) => {
  const pathName = getLastPathValue(event);
  if (pathName === PAGES_NAMES.savedArticles) {
    function render() {
      // Data
      const articlesContainerEl = document.querySelector('.articles');
      const inputTitleFilterEl = document.getElementById('title');
      const filterFormEl = document.querySelector('#filter-form');
      const articles = getSavedArticlesStorage();   

      // Functions
      const filterTitleCallback = (e) => {
        const textValue = e.target.value;
        articlesContainerEl.innerHTML = '';
        if (textValue === '') {
          renderArticles(articles);
        } else {
          const filteredData = articles.filter(article => {
            const articleTitle = article.title;
            return articleTitle.includes(textValue);
          });

          renderArticles(filteredData);
        }
      }
    
      const renderArticles = (articles) => {
        articles.forEach(element => {
          createArticleHtml(articlesContainerEl, element,  PAGES_NAMES.savedArticles);
        });
      }

      // Event listners
      filterFormEl.addEventListener('submit', (e) => {
        e.preventDefault();
      });

      inputTitleFilterEl.addEventListener('input', filterTitleCallback);

      // Initial render
      renderArticles(articles);

    }

    render();
  }
});

