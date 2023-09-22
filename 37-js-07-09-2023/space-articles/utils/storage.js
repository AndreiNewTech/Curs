
import { STORAGE_NAMES } from  './constants.js';
 
export const getSavedArticlesStorage = function() {
  const savedArticlesStorage =  localStorage.getItem(STORAGE_NAMES.savedArticles) ? JSON.parse(localStorage.getItem("saved_articles")) : [];
  if (!savedArticlesStorage.length) { 
    localStorage.setItem(STORAGE_NAMES.savedArticles, JSON.stringify([]));
  }
  return savedArticlesStorage;
}


export const removeArticleStorage = function(articleId) {
  const articles = getSavedArticlesStorage();
  const newArticleList = articles.filter(article => article.id !== articleId);
  localStorage.setItem(STORAGE_NAMES.savedArticles, JSON.stringify(newArticleList));
}


export const isArticleSavedInStorage = function(articleId) {
  const articles = getSavedArticlesStorage();
  const articleObj= articles.find(function(article) {
    return article.id === articleId;
  });

  return articleObj ? true : false
}