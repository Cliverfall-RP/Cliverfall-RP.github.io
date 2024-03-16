function selectNews(id){
    let article_title = document.querySelector(".article-title");
    let article_text = document.querySelector(".article-text");
    let news_title = document.getElementById(`title${id}`);
    let news_text = document.getElementById(`text${id}`);

    if(news_title.children !== ""){
        text = news_title.textContent
        article_title.textContent = text
    }
};

let childs = document.querySelector(".side-bar-page").childNodes
for(let i = 0; i < childs.length; i++){
    if (childs[i].innerHTML !== undefined){
        let newChilds = childs[i].childNodes
        for(let j=0;j<newChilds.length;j++){
            if(newChilds[j].innerHTML !== undefined){
                if(newChilds[j].textContent.length >= 181){
                    console.log(newChilds[j].id)
                    let newText = newChilds[j].textContent.slice(0, 180)
                    console.log(newText)
                    document.getElementById(newChilds[j].id).textContent = newText+"..."
                }
            }
        }
    }
}