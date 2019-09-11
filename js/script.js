'use strict';

let lackOfClickOnPage = 0; /*if is 0 that lack of click on link on the page  */
/*The object with all articles and them tags */
const articleTag = {
  article1: ['#tag-cat', '#tag-cactus', '#tag-scissors'],
  article2: ['#tag-cat', '#tag-car'],
  article3: ['#tag-dog', '#tag-swine'],
  article4: ['#tag-dog', '#tag-food'],
  article5: ['#tag-person'],
  article6: ['#tag-cat', '#tag-dog', '#tag-spoon'],
  article7: ['#tag-children'],
  article8: ['#tag-dog'],
  article9: ['#tag-party'],
  article10: ['#tag-children', '#tag-relax'],
};

/*Create  in articles links with authors*/

function addAuthorToArticle(article, getDataAuthors) {
  const boxNameAuthor = article.querySelector('.post-author');
  let LinkAuthorHtml = 'by ' + '<a href = "#' + getDataAuthors + '" >' + getDataAuthors + '</a>';
  boxNameAuthor.insertAdjacentHTML('afterbegin', LinkAuthorHtml);
}

function getAttributeAuthorsFromArticle() {
  const getPosts = document.querySelectorAll('.post');
  for (let article of getPosts) {
    let getDataAuthors = article.getAttribute('data-author');

    addAuthorToArticle(article, getDataAuthors);
  }
}

getAttributeAuthorsFromArticle();


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
  ClickToLinkAuthorHandler();
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
  ClickToLinkAuthorHandler();
}

generateTitleLinks();

function activeLinHtmlAfterFilterTags() {
  let clickAttribute = this.getAttribute('href').slice(1);
  const allArrticles = document.querySelectorAll('.post');


  let chooseArticle;
  for (let article of allArrticles) {

    let actualAtrributeInArticle = article.getAttribute('id');

    if (clickAttribute === actualAtrributeInArticle) {
      chooseArticle = article;
      const articleAfterFilter = document.querySelectorAll('.post');
      for (let link of articleAfterFilter) {
        link.classList.remove('active');
      }
      generateTags(article);

      addClickListenersToTags(article);
    }
  }
  chooseArticle.classList.add('active');
}



function lookForThesameElements(get) {
  clearMessages();
  for (let tab in articleTag) {

    let activeLine = articleTag[tab];

    for (let x = 0; x < activeLine.length; x++) {

      if (activeLine[x] === get) {
        const articleContainTag = [tab];


        const articles = document.querySelectorAll('.post');
        for (let article of articles) {


          const articleId = article.getAttribute('id');
          if (articleContainTag[0] === articleId) {

            const articleId = article.getAttribute('id');
            const titlePost = article.querySelector('.post-title').innerHTML;
            const linkHtml = '<li><a href = "#' + articleId + '"><span>' + titlePost + '</span></a></li>';
            addMessages(linkHtml);


            const filterLinkHtml = document.querySelectorAll(".titles a ");
            for (let actualLink of filterLinkHtml) {

              actualLink.addEventListener('click', activeLinHtmlAfterFilterTags);


            }
          }
        }
      }

    }
  }
}


function tagClickHandler(event) {


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



/*Author link */

function createlinkHtml(singleArticle) {


  const articleId = singleArticle.getAttribute('id');

  const titlePost = singleArticle.querySelector('.post-title').innerHTML;
  const linkHtml = '<li><a href = "#' + articleId + '"><span>' + titlePost + '</span></a></li>';
  addMessages(linkHtml);
  const filterLinkHtml = document.querySelectorAll(".titles a ");
  for (let actualLink of filterLinkHtml) {

    actualLink.addEventListener('click', activeLinHtmlAfterFilterTags);


  }

}


function checkExistAuthorNameInAllArticles(variable) {
  const getPosts = document.querySelectorAll('.post');
  for (let singleArticle of getPosts) {
    let nameOfAuthor = singleArticle.getAttribute('data-author');
    if (variable === nameOfAuthor) {
      createlinkHtml(singleArticle);
      console.log(singleArticle);
    }

  }

}

function ClickToLinkAuthorHandler() {
  const getDataAuthors = document.querySelector(".post.active a ");
  getDataAuthors.addEventListener('click', function () {
    clearMessages();
    const dataAuthorForArticle = getDataAuthors.getAttribute('href').slice(1);
    checkExistAuthorNameInAllArticles(dataAuthorForArticle);
  });


}