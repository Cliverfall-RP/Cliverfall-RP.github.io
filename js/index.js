function selectNews(id){
    let article_title = document.querySelector(".article-title");
    let article_text = document.querySelector(".article-text");
    let news_title = document.getElementById(`title${id}`);
    let news_text = document.getElementById(`text${id}`);

    if(news_title.children !== ""){
        text = news_title.textContent
        text2 = news_text.textContent
        article_title.textContent = text
        article_text.textContent = text2
    }
};
function formatNewsText(){
    let childs = document.querySelector(".side-bar-page").childNodes
    for(let i = 0; i < childs.length; i++){
        if (childs[i].innerHTML !== undefined){
            let newChilds = childs[i].childNodes
            for(let j=0;j<newChilds.length;j++){
                if(newChilds[j].innerHTML !== undefined){
                    if(newChilds[j].textContent.length >= 181){
                        let newText = newChilds[j].textContent.slice(0, 180)
                        document.getElementById(newChilds[j].id).textContent = newText+"..."
                    }
                }
            }
        }
    }
}
import data from "./contet.json" assert { type: 'json' }
for (let i=0;i<data.news.length;i++){
    let html = `
        <div id="${data.news[i].id}" class="news">
            <p id="title${data.news[i].id}" class="news-title">${data.news[i].title}</p>
            <p id="text${data.news[i].id}" class="news-short-text">
                ${data.news[i].text}
            </p>
            <p id="date${data.news[i].id}" class="news-date">${data.news[i].date}</p>
        </div>`
    let elm = document.querySelector(".side-bar-page")
    let previusHTML = elm.innerHTML
    elm.innerHTML = previusHTML + html
}

formatNewsText()