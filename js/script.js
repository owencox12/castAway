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

let bs = document.querySelectorAll(".header__menu_list_type")

bs.forEach(function(e){
    e.addEventListener("click", function(el){
        bs.forEach(function(e){
            e.classList.remove("header__menu_list_type_active")
        })
        e.classList.add("header__menu_list_type_active")
    })
})