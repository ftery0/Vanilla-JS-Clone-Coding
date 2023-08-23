const loginform=document.querySelector("#login_form")
const loginInput=document.querySelector("#login_form input")
const greeting=document.querySelector("#greeting")

const HIIDEN_CLASS="hidden";
const USERNAME_KEY="username";

function onsubmit(event){
    event.preventDefault(); //원래 form의 submit을 하면 기본동작으로 새로고침이 되는데 이것을 막아주는 태그
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username)
    loginform.classList.add(HIIDEN_CLASS)
    paintGreeting(username)  
}
function paintGreeting(username){
    greeting.innerText =`hello ${username}`;
   greeting.classList.remove(HIIDEN_CLASS);
}

const savedusername = localStorage.getItem(USERNAME_KEY);
if(savedusername === null){
    loginform.classList.remove(HIIDEN_CLASS)
    loginform.addEventListener("submit",onsubmit)

}else{
    paintGreeting(savedusername)
}



