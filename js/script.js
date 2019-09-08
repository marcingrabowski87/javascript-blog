'use strict';

/* Mentor-Tag */

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
      /*Add tag for article*/
      /* console.log(article); */
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





function tagClickHandler(event) {
  /* prevent default action for this event */
  event.preventDefault();
  console.log(this);

  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = this.querySelector('href');
  /* console.log(href); */
  /* make a new constant "tag" and extract tag from the "href" constant */

  /* find all tag links with class active */

  /* START LOOP: for each active tag link */

  /* remove class active */

  /* END LOOP: for each active tag link */

  /* find all tag links with "href" attribute equal to the "href" constant */

  /* START LOOP: for each found tag link */

  /* add class active */

  /* END LOOP: for each found tag link */

  /* execute function "generateTitleLinks" with article selector as argument */
}



function addClickListenersToTags() {


  /* const arrayWithLinksToTags = findAllLinkstoTags(); */
  const arrayWithLinksToTags = document.querySelectorAll('.list-horizontal');
  console.log(arrayWithLinksToTags);
  for (let tagSingleLink of arrayWithLinksToTags) {

    tagSingleLink.addEventListener('click', tagClickHandler);
  }

}






addClickListenersToTags();