const open = document.querySelector(".openbar")
const nav = document.querySelector(".navbar")
const close = document.querySelector(".close")


if (open) {
   open.addEventListener('click', ()=> {
    nav.classList.add('active')
   }) 
}

if (close) {
    close.addEventListener('click', ()=> {
     nav.classList.remove('active')
    }) 
 }


 /*-------image slider-----*/

 let bigimg = document.querySelector(".mainimg")
 let smallimg = document.querySelectorAll(".smallimg")

 smallimg[0].addEventListener('click', () => {
   bigimg.src = smallimg[0].src
 })

 smallimg[1].addEventListener('click', () => {
   bigimg.src = smallimg[1].src
 })

 smallimg[2].addEventListener('click', () => {
   bigimg.src = smallimg[2].src
 })

 smallimg[3].addEventListener('click', () => {
   bigimg.src = smallimg[3].src
 })