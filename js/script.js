let burger = document.querySelector(".header__burger")

let burgerMenu = document.querySelector(".header__burger_list")

burger.addEventListener("click", function(){
    burger.classList.toggle("header__burger_active")
    burgerMenu.classList.toggle("header__burger_list_active")
    document.querySelector("body").classList.toggle("lock")
})


window.addEventListener("scroll", function(){
    if(scrollY >= 100) {
        document.querySelector(".header").classList.add("header_active")
    } else {
        document.querySelector(".header").classList.remove("header_active")
    }
})

let menu = document.querySelector(".header__menu_list")


menu.addEventListener("click", function(e){
    let link = e.target
    if(link.dataset.id) {
        e.preventDefault();
        let target = document.querySelector(link.hash)
        let pos = target.offsetTop-50
        window.scrollTo({
            top: pos,
            behavior: "smooth"
        })
    }
})



window.addEventListener("scroll", function(){
    let scrollDistance = window.scrollY
    console.log(scrollDistance)

let sect = document.querySelectorAll(".sect")
let nav = document.querySelectorAll(".header__menu_list_type")

sect.forEach(function(el, i){
    if(el.offsetTop-119 <= scrollDistance) {
        nav.forEach(function(e){
            if (e.classList.contains("header__menu_list_type_active")) {
                e.classList.remove("header__menu_list_type_active")
            }
        })
        document.querySelectorAll('.header__menu_list li')[i].classList.add("header__menu_list_type_active")
    }
})

})