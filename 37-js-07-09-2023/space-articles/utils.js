
const DATE_OPTIONS = { year: 'numeric', month: 'long', day: 'numeric' };

export const createArticleHtml = (domReference, aricleObj = {}, isArticleSaved) => {

  const articleLabelBtn = isArticleSaved ? '<span>Saved </span>' : '<div class="article__button-container"><button>Save Article</button></div>'

  const articleString = `<article>
    <div class="article__image-container"  style="background-image: url(${aricleObj.imageUrl})">

    </div>
    <div class="article__content-container">
      <h2>${aricleObj.title}</h2>
      <p>${aricleObj.summary}</p>
      <div class="article__footer-container">
        <span>${new Date(aricleObj.publishedAt).toLocaleDateString('en-US', DATE_OPTIONS)}</span>
        <a target="_blank" href="${aricleObj.url}"><span>${aricleObj.newsSite}</span></a>
      </div>
    </div>
    ${articleLabelBtn}
  </article>`

  domReference.insertAdjacentHTML('beforeend', articleString);

}

