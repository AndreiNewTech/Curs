
import { articles } from './script.js';
import { getSavedArticlesStorage, removeArticleStorage  } from './storage.js';

const DATE_OPTIONS = { year: 'numeric', month: 'long', day: 'numeric' };

function handleArticleSaveClick(e, objectId) {
  const articleObj= articles.find(function(article) {
    return article.id === objectId;
  });

  const savedArticlesList = getSavedArticlesStorage() ?? [];
  // Find if the article was already saved
  const savedArticlesArticle= savedArticlesList.find(function(article) {
    return article.id === objectId;
  });

  // If it wasn't already saved add new article
  if (!savedArticlesArticle) {
    const updatedSavedArticles = [...savedArticlesList, articleObj];
    localStorage.setItem('saved_articles', JSON.stringify(updatedSavedArticles));


     // Remove save button
    const buttonEl = e.target;
    buttonEl.remove();

    // Add Saved label
    const articleEl = document.getElementById(objectId);
    const spanEl = document.createElement('span');
    spanEl.textContent = 'Saved';

    articleEl.appendChild(spanEl);
  }

}


function handleArticleDeleteClick(objectId) {
  // 1 Delete from Local Storage
  removeArticleStorage(objectId);

  // 2 Remove from DOM
  const articleEl = document.getElementById(objectId);
  articleEl.remove();

}

export const createArticleHtml = (domReference, aricleObj = {}, isArticleSaved) => {
  const buttonContainerEl = document.createElement('div');
  const buttonEl = document.createElement('button');
  const articleString = `<article  id=${aricleObj.id}>
    <div class="article__image-container" style="background-image: url(${aricleObj.imageUrl})">
    </div>
    <div class="article__content-container">
      <h2>${aricleObj.title}</h2>
      <p>${aricleObj.summary}</p>
      <div class="article__footer-container">
        <span>${new Date(aricleObj.publishedAt).toLocaleDateString('en-US', DATE_OPTIONS)}</span>
        <a target="_blank" href="${aricleObj.url}"><span>${aricleObj.newsSite}</span></a>
      </div>
    </div>
  </article>`
  domReference.insertAdjacentHTML('beforeend', articleString);
  // Add save article button if not already saved
  if (!isArticleSaved) {
    buttonEl.textContent = 'Save Article';
    buttonEl.addEventListener('click', (e) => handleArticleSaveClick(e, aricleObj.id));
  }

  // Add remove article button if already saved
  else {
    buttonEl.textContent = 'Remove Article';
    buttonEl.addEventListener('click', () => handleArticleDeleteClick(aricleObj.id));
  }

  buttonContainerEl.className = 'article__button-container';
  buttonContainerEl.appendChild(buttonEl);

  const articleElem = document.getElementById(aricleObj.id);
  articleElem.appendChild(buttonContainerEl);

}

