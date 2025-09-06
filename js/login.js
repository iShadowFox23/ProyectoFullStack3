const giroCarta=document.getElementById('giroCarta');
const registerText=document.getElementById('registroTexto');
const loginText=document.getElementById('InicioTexto');

registerText.addEventListener('click',()=>{
    giroCarta.style.transform='rotateY(180deg)'
});

loginText.addEventListener('click',()=>{
    giroCarta.style.transform='rotateY(0deg)'
});