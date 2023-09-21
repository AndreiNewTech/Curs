

export const getSavedArticlesStorage = function() {
  const savedArticlesStorage =  localStorage.getItem("saved_articles") ? JSON.parse(localStorage.getItem("saved_articles")) : [];
  if (!savedArticlesStorage.length) { 
    localStorage.setItem('saved_articles', JSON.stringify([]));
  }
  return savedArticlesStorage;
}


export const removeArticleStorage = function(articleId) {
  const articles = getSavedArticlesStorage();
  const newArticleList = articles.filter(article => article.id !== articleId);
  localStorage.setItem('saved_articles', JSON.stringify(newArticleList));
}
