
import { articles } from '../script.js';
import { getSavedArticlesStorage, removeArticleStorage, isArticleSavedInStorage  } from '../utils/storage.js';
import { DATE_OPTIONS, PAGES_NAMES}  from '../utils/constants.js';


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


function handleArticleDeleteClick(_e, objectId) {
  // 1 Delete from Local Storage
  removeArticleStorage(objectId);

  // 2 Remove from DOM
  const articleEl = document.getElementById(objectId);
  articleEl.remove();
}

export const createArticleHtml = (domReference, articleObj = {}, pageType) => {
  const buttonContainerEl = document.createElement('div');
  const buttonEl = document.createElement('button');
  const isArticleSaved = isArticleSavedInStorage(articleObj.id);
  const articleString = `<article  id=${articleObj.id}>
    <div class="article__image-container" style="background-image: url(${articleObj.imageUrl})">
    </div>
    <div class="article__content-container">
      <h2>${articleObj.title}</h2>
      <p>${articleObj.summary}</p>
      <div class="article__footer-container">
        <span>${new Date(articleObj.publishedAt).toLocaleDateString('en-US', DATE_OPTIONS)}</span>
        <a target="_blank" href="${articleObj.url}"><span>${articleObj.newsSite}</span></a>
      </div>
    </div>
  </article>`;


  domReference.insertAdjacentHTML('beforeend', articleString);
  const articleElem = document.getElementById(articleObj.id);


  const renderButton = (buttonText, callbackFn) => {
    buttonEl.textContent = buttonText;
    buttonEl.addEventListener('click', (e) => callbackFn(e, articleObj.id));

    buttonContainerEl.className = 'article__button-container';
    buttonContainerEl.appendChild(buttonEl);
    articleElem.appendChild(buttonContainerEl);
  }


  // Buttons scenarios
  switch (pageType) {
    case PAGES_NAMES.home:
      if (isArticleSaved) {
        const spanEl = document.createElement('span');
        spanEl.className = 'article__saved-label';
        spanEl.textContent = 'Saved';
        articleElem.appendChild(spanEl);
      } else {
        renderButton('Save Article', handleArticleSaveClick);
      }
      break;    
    case PAGES_NAMES.savedArticles:
      renderButton('Remove Article', handleArticleDeleteClick);
      break;

    default:
      break;
  }
}


