document.addEventListener("DOMContentLoaded",()=>{document.getElementById("toggle").addEventListener("click",()=>{document.querySelector(".header").classList.toggle("open")})});window.addEventListener("keydown",e=>{e.key==="Escape"&&document.querySelector(".header").classList.remove("open")});document.getElementById("nav").addEventListener("click",e=>{e._isClickWithInMenu=!0});document.getElementById("toggle").addEventListener("click",e=>{e._isClickWithInMenu=!0});document.body.addEventListener("click",e=>{e._isClickWithInMenu&&document.querySelector(".header").classList.remove("open")});
