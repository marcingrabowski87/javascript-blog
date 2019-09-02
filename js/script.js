'use strict';

function titleClickHandler(event) {
    event.preventDefault();
    /* console.log('Link was clicked!'); */
    /* console.log(event); */
    /* [DONE]  remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');

    for (let activeLink of activeLinks) {
        activeLink.classList.remove('active');
    }
    /* [IN PROGRESS] add class 'active' to the clicked link */
    this.classList.add('active');
    /* console.log('clickedElement:', this); */

    /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.post.active');

    for (let activeArticle of activeArticles) {
        activeArticle.classList.remove('active');
    }
    /* get 'href' attribute from the clicked link */
    const clickAttribute = this.getAttribute("href").slice(1);


    /* find the correct article using the selector (value of 'href' attribute) */
    const allArrticles = document.querySelectorAll('.post');

    let chooseArticle;
    for (let article of allArrticles) {

        let actualAtrributeInArticle = article.getAttribute("id");

        if (clickAttribute === actualAtrributeInArticle) {
            chooseArticle = article;


        }
    }
    /* add class 'active' to the correct article */
    chooseArticle.classList.add('active');
}



/* ----------------------------------------------------------------------------------------------- */




function clearMessages() {
    const optTitleListSelector = document.querySelectorAll('.titles');
    for (let titleList of optTitleListSelector) {
        titleList.innerHTML = "";
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
        const titlePost = article.querySelector(".post-title").innerHTML;
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