let pocitadlo="0";
let i=0;
const createMessageElm = (msg,i) => {
  const element = document.createElement('div');
  element.className = `message ${msg.side}`;
  
  element.innerHTML = (
    `<div class="head ${msg.name.toLowerCase()}">
        <img src="img/${msg.name.toLowerCase()}.png"/>
      </div>
      <div class="text">${msg.text}</div>
      <div class="like"><img class="like_button${i}" src="img/like.png">
        <div class="like_count${i}"></div>`
  );
const like_button=element.querySelector(".like_button"+i);

like_button.addEventListener("click",()=>{
 if (msg.likes!== undefined) {
   msg.likes++
   console.log(msg.likes);
        } 
   else{msg.likes=0;}

   element.querySelector(".like_count"+i).innerHTML=msg.likes;
  
})

  return element;


}


  





const updateChat = () => {
  const chatElement = document.querySelector('#chat');
  chatElement.innerHTML ="";

  for(const zprava of conversation) {
    chatElement.appendChild(createMessageElm(zprava,i));
    i++
    
  }
}

document.addEventListener('DOMContentLoaded', () => {
  updateChat();
  
  
});