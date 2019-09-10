'use strict';

let lackOfClickOnPage = 0; /*if is 0 that lack of click on link on the page  */
/*The object with all articles and them tags */
const articleTag = {
  article1: ['#tag-cat', '#tag-cactus', '#tag-scissors'],
  article2: ['#tag-cat', '#tag-car'],
  article3: ['#tag-dog', '#tag-swine'],
  article4: ['#tag-dog', '#food'],
  article5: ['#person'],
  article6: ['#tag-cat', '#dog', '#tag-spoon'],
  article7: ['#tag-children'],
  article8: ['#tag-dog'],
  article9: ['#tag-party'],
  article10: ['#tag-children', '#relax'],
};

function Cleartext() {
  const articleTag = document.querySelectorAll('.list-horizontal');
  for (let line of articleTag)
    line.innerHTML = '';
}



function getsingleTagForArticle(TagForArticleArray, chooseArticle) {
  for (let singleTag of TagForArticleArray) {
    const articleTag = chooseArticle.querySelector('.list-horizontal');
    let tagHtml = '<li><a href="#tag-' + singleTag + '">' + singleTag + '</a></li>';

    articleTag.insertAdjacentHTML('beforeend', tagHtml);

  }
}

function articleTagForArray(articlesTag, chooseArticle) {
  const TagForArticleArray = articlesTag.split(' ');

  getsingleTagForArticle(TagForArticleArray, chooseArticle);
}

function getTagFromData_Tage(chooseArticle) {
  const articlesTag = chooseArticle.getAttribute('data-tags');

  articleTagForArray(articlesTag, chooseArticle);

}



function generateTags(chooseArticle) {

  Cleartext();

  getTagFromData_Tage(chooseArticle);

}

/* -------------*/




function titleClickHandler(event) {
  event.preventDefault();

  const activeLinks = document.querySelectorAll('.titles a.active');

  for (let activeLink of activeLinks) {

    activeLink.classList.remove('active');
  }

  this.classList.add('active');

  const activeArticles = document.querySelectorAll('.post.active');

  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
  }

  const clickAttribute = this.getAttribute('href').slice(1);



  const allArrticles = document.querySelectorAll('.post');

  let chooseArticle;
  for (let article of allArrticles) {

    let actualAtrributeInArticle = article.getAttribute('id');

    if (clickAttribute === actualAtrributeInArticle) {
      chooseArticle = article;
      /*Add tag for  this article*/
      generateTags(article);
      ++lackOfClickOnPage;
      addClickListenersToTags(article);
    }
  }
  chooseArticle.classList.add('active');
}

/* ----------------------------------------------------------------------------------------------- */




function clearMessages() {
  const optTitleListSelector = document.querySelectorAll('.titles');
  for (let titleList of optTitleListSelector) {
    titleList.innerHTML = '';
  }
}

function addMessages(linkHtml) {
  const titlesPostBox = document.querySelector('.titles');
  titlesPostBox.insertAdjacentHTML('beforeend', linkHtml);
}

function getSingleArticleIDAndTitlePostAndCreateLinkHtml() {
  const articles = document.querySelectorAll('.post');
  for (let article of articles) {
    const articleId = article.getAttribute('id');
    const titlePost = article.querySelector('.post-title').innerHTML;
    const linkHtml = '<li><a href = "#' + articleId + '"><span>' + titlePost + '</span></a></li>';
    addMessages(linkHtml);
  }
}

function generateTitleLinks() {
  clearMessages();
  getSingleArticleIDAndTitlePostAndCreateLinkHtml();

  const links = document.querySelectorAll('.titles a');
  document.querySelector('.titles>li a').classList.add('active'); /*The link Article 1 is active after open the page */

  for (let link of links) {
    link.addEventListener('click', titleClickHandler);

  }
}

generateTitleLinks();

function lookForThesameElements(get) {
  console.log(get);
  for (let tab in articleTag) {
    /* console.log(articleTag[tab]); */
    let activeLine = articleTag[tab];
    /*  console.log(activeLine.length); */
    for (let x = 0; x < activeLine.length; x++) {
      /* console.log(activeLine[x]); */
      if (activeLine[x] === get) {
        console.log("dodaj link");
      }
      /* countThesameTags(activeLine[x]); */
    }
  }
}


function tagClickHandler(event) {
  /* prevent default action for this event */
  event.preventDefault();
  lookForThesameElements(this.getAttribute('href'));

}

function clickTag(variable1) {
  for (let tagSingleLink of variable1) {

    tagSingleLink.addEventListener('click', tagClickHandler);

  }
}

function addClickListenersToTags(article) {

  if (lackOfClickOnPage !== 0) {
    const actualArticle = article.querySelectorAll(".list-horizontal a");
    clickTag(actualArticle);

  } else {

    const arrayWithLinksToTags = document.querySelectorAll('.post.active .list-horizontal a');

    clickTag(arrayWithLinksToTags);
  }

}
addClickListenersToTags();



/* const quantityThesameTags = {};

function countThesameTags(singleArrayElement) {
  console.log(singleArrayElement);
  quantityThesameTags.singleArrayElement = 0;
  console.log(quantityThesameTags.cat);
} */

/*Create Object for article */