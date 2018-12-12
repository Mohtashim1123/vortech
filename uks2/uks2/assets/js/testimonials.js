let links = document.getElementsByClassName('all').value
for(let i=0; i<links.length;i++){
links[i].addEventListener("click",pagination(links[i].innerHTML), false )
function pagination(d){
    
    alert()
}
}
console.log(links)