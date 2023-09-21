import { getSavedArticlesStorage } from "./storage.js";
import {createArticleHtml} from './utils.js';

document.addEventListener("DOMContentLoaded", (event) => {
  const pathName = event.target.location.pathname.split('/').at(-1);
  if (pathName === 'saved-articles.html') {
    function render() {
      const articlesContainerEl = document.querySelector('.articles');
      const articles = getSavedArticlesStorage(); 
    
      articles.forEach(element => {
        createArticleHtml(articlesContainerEl, element, true);
      });
    
    }
    render();
  }
});

