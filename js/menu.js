(function (){
    const $menuOpenBtn=document.querySelector(".nav__menu");
    const $menuCloseBtn=document.querySelector(".nav__close");
    const $menuLinks=document.querySelector(".nav__link--menu");

    $menuOpenBtn.addEventListener("click",()=>{
        console.log("hola");
        $menuLinks.classList.add("nav__link--show");
    });
    $menuLinks.childNodes.forEach(m=>{
        m.addEventListener("click",()=>{
            $menuLinks.classList.remove("nav__link--show");
        })
    })
    


})();