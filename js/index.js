function closeChatTab(){
    let item = document.querySelector(".chat-modal");
    item.classList.remove("show")
    item.classList.add("hide")
}
function openChatTab(){
    let item = document.querySelector(".chat-modal");
    item.classList.remove("hide")
    item.classList.add("show")
}
function createNewTextBuble(message, sender){
    let html = `<div class='text-buble'><strong>${sender}</strong><p>${message}</p></div>`
    document.querySelector(".chat-load").innerHTML = html
}
function sendMessage(){
    let input = document.getElementById("message");
    createNewTextBuble(input.value, "d3ku07")
    input.value = ""

}