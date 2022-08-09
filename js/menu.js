const seemenu = document.querySelector('.seemenu')
const menu = document.querySelector('.menu-navegacion')
console.log(menu)
console.log(seemenu)

seemenu.addEventListener('click',()=>{
   menu.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread')
    && e.target != menu && e.target != seemenu){
        menu.classList.toggle('spread')
    }
})
     

 