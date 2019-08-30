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
    let clickAttribute = this.getAttribute("href");
    clickAttribute = clickAttribute.slice(1);

    /* find the correct article using the selector (value of 'href' attribute) */
    const allArrticles = document.querySelectorAll('.post');
    let chooseArticle;
    for (let article of allArrticles) {
        let actualAtrributeInArticle = article.getAttribute("id");

        if (clickAttribute == actualAtrributeInArticle) {
            chooseArticle = article;

        }
    }
    /* add class 'active' to the correct article */
    chooseArticle.classList.add('active');
}


const links = document.querySelectorAll('.titles a');

for (let link of links) {
    link.addEventListener('click', titleClickHandler);
}