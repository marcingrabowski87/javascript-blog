'use strict';

/* Mentor-Tag */

function Cleartext() {
  const articleTag = document.querySelector('.list-horizontal');
  articleTag.innerHTML = 'aaa';
}



function getsingleTagForArticle(TagForArticleArray) {
  for (let singleTag of TagForArticleArray) {
    const articleTag = document.querySelector('.list-horizontal');
    let tagHtml = '<li><a href="#tag-' + singleTag + '">' + singleTag + '</a></li>';
    console.log(tagHtml);
    articleTag.insertAdjacentHTML('beforeend', tagHtml);

  }
}

function articleTagForArray(articlesTag) {
  const TagForArticleArray = articlesTag.split(' ');
  console.log(TagForArticleArray);
  getsingleTagForArticle(TagForArticleArray);
}

function getTagFromData_Tage(chooseArticle) {
  const articlesTag = chooseArticle.getAttribute('data-tags');

  articleTagForArray(articlesTag);

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
      /*Add tag for article*/
      console.log(article);
      generateTags(article);
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

  for (let link of links) {
    link.addEventListener('click', titleClickHandler);

  }
}

generateTitleLinks();


/* Tag */

/* function Cleartext(clear) {
  clear.innerHTML = '';
}

function foundArticlesWrapperTag(singleArticle) {
  const articleTag = singleArticle.querySelector('.list-horizontal');

  Cleartext(articleTag);

}

function getsingleTagForArticle(y) {
  for (let singleTag of y) {
    const articleTag = document.querySelector('.list-horizontal');
    let tagHtml = '<li><a href="#tag-' + singleTag + '">' + singleTag + '</a></li>';

    articleTag.insertAdjacentHTML('beforeend', tagHtml);

  }
}

function articleTagForArray(x) {
  const TagForArticleArray = x.split(' ');

  getsingleTagForArticle(TagForArticleArray);
}

function getTagFromData_Tage(get) {
  const articleTag = get.getAttribute('data-tags');
  articleTagForArray(articleTag);

}

function foundArticles() {
  const articles = document.querySelectorAll('.post');
  for (let singleArticle of articles) {
    foundArticlesWrapperTag(singleArticle);
    getTagFromData_Tage(singleArticle);
  }
}

function generateTags() {

  foundArticles();

}
generateTags(); */