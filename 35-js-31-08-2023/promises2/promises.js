// Aici doar mimam datele venite din mai multe servere (3)

const newsDataObj = {
  international: [
    {
      title: "Why there's a rush to explore the Moon's enigmatic South Pole",
      descriere: "India's Chandrayaan-3 mission is already revealing new insights about the Moon's enigmatic South Pole. Future missions to this region are planned by the US, China and Russia, so what makes it so fascinating?",
      image: 'https://ychef.files.bbci.co.uk/1600x900/p0g9nwpt.webp',
    }
  ],
  financial: [
    {
      title: 'Seeking up to 24% Dividend Yield? Analysts Suggest 2 Dividend Stocks to Buy',
      descriere: 'Scholars who study the stock market’s historical performance estimate that over time, the payment (and reinvestment, and compounding) of dividends have contributed anywhere from 30% to 90% of the S&P 500’s total returns. Simply put, if you’re not investing in dividend stocks, you’re doing it wrong.',
      image: 'https://s.yimg.com/ny/api/res/1.2/Az2yV0Uq4arrdkIcaiPYUA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTcwNTtoPTM1Mw--/https://media.zenfs.com/en/tipranks_452/f7e60e32d514c7a8dcd5f195fbf45d13',
    },
    {
      title: 'Why Verizon, AT&T and T-Mobile Want to Access Your Bank Account',
      descriere: 'Carriers are offering discounts to avoid rising credit-card fees, but consider important factors before making any changes.',
      image: 'https://s.yimg.com/ny/api/res/1.2/T9m_65XsnSSjlqTnGpUnQw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTcwNTtoPTM1Mw--/https://media.zenfs.com/en/wsj.com/dcee7db42ac2e65f65582191384bc476',
    },
  ],
  sports: [
    {
      title: 'Euro 2024 qualifiers: Shane Duffy and Aaron Connolly back in Republic squad for double-header',
      descriere: 'Shane Duffy and Aaron Connolly will return to the Republic of Ireland squad for the Euro 2024 qualifiers against France and the Netherlands.',
      image: 'https://ichef.bbci.co.uk/onesport/cps/976/cpsprodpb/7E9E/production/_130941423_gettyimages-1235059434.jpg',
    },
    {
      title: "Mawid Malan: England batter 'relieved' to make 50-over World Cup squad",
      descriere: "Dawid Malan says it was a 'relief' to be named in the England squad for this year's 50-over World Cup in India.",
      image: 'https://ichef.bbci.co.uk/onesport/cps/976/cpsprodpb/157E3/production/_130953088_gettyimages-1634861545.jpg',
    },
  ]
}


const fetchData = function(type, timeout = 1000) {
  switch (type) {
    case 'international':
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(newsDataObj.international)
        }, timeout);
      })

    case 'financial':
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(newsDataObj.financial)
        }, timeout);
      })

    case 'sports':
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(newsDataObj.sports)
        }, timeout);
      })
  
    default:
      return  new Promise((resolve, reject) => {
        reject('No correct data type');
      })
  }
}


// 1. Top international story (1)
// 2. Main financial stories (3)
// 3. Sports stories (3)
// Adaugam dummy data -> vom mima request catre server cu un setTimeout()

// Article
// -> Title
// -> Descriere
// -> Image

// Titluri pentru sections (headings)
// a) Si un loading state pentru pentru fiecare section (daca nu exista data sau este eroare -> text no data available)
// b) Loading pentru toate -> si cand toate sunt gata le afisam pe toate.

class Article {
  constructor(title, descriere, image) {
    this.title = title;
    this.descriere = descriere;
    this.image = image;
  }

   get getElementHtml() {
    console.log('Data')
    if (this.title && this.descriere && this.image) {
      const articleContainerEl = document.createElement('article');

      const articleImageEl = document.createElement('img');
      articleImageEl.src = this.image;
  
      const articleTitleEl = document.createElement('h3');
      articleTitleEl.textContent = this.title;
      
      const articleDescripEl = document.createElement('p');
      articleDescripEl.textContent = this.descriere;
  
      articleContainerEl.appendChild(articleImageEl);
      articleContainerEl.appendChild(articleTitleEl);
      articleContainerEl.appendChild(articleDescripEl);

      return articleContainerEl;
    }
  }
}


fetchData('international').then(function (result) {
  result.forEach(article => {
  // Echivalent 
  // const title = article.title;
  // const descriere = article.descriere;
  // const image = article.image
    const { title, descriere, image } = article;
    const articleObj = new Article(title, descriere, image);
    const articleEl = articleObj.getElementHtml;

    const sectionContainerEl = document.querySelector('.top-international');
    sectionContainerEl.appendChild(articleEl);
  });

}).catch(er => {
  console.log(er);
});

fetchData('financial', 3000).then(function (result) {
  result.forEach(article => {
  // Echivalent 
  // const title = article.title;
  // const descriere = article.descriere;
  // const image = article.image
    const { title, descriere, image } = article;
    const articleObj = new Article(title, descriere, image);
    const articleEl = articleObj.getElementHtml;

    const sectionContainerEl = document.querySelector('.financial');
    sectionContainerEl.appendChild(articleEl);
  });

}).catch(er => {
  console.log(er, 'Financial');
});

fetchData('sports', 2000).then(function (result) {
  result.forEach(article => {
  // Echivalent 
  // const title = article.title;
  // const descriere = article.descriere;
  // const image = article.image
    const { title, descriere, image } = article;
    const articleObj = new Article(title, descriere, image);
    const articleEl = articleObj.getElementHtml;

    const sectionContainerEl = document.querySelector('.sports');
    sectionContainerEl.appendChild(articleEl);
  });

}).catch(er => {
  console.log(er);
});


// Promise.a([fetchData('sports', 2000), fetchData('financial', 10000), fetchData('international')]).then(articles => {
//   console.log('Finished', articles);
//   // const { title, descriere, image } = article;
//   // const articleObj = new Article(title, descriere, image);
//   // const articleEl = articleObj.getElementHtml;

//   // const sectionContainerEl = document.querySelector('.sports');
//   // sectionContainerEl.appendChild(articleEl);
// })