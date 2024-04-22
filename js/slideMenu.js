const buttonMenu = document.querySelector('.buttonMenu')
const menu = document.querySelector('.menu')
buttonMenu.addEventListener("click", function()
{
    buttonMenu.classList.toggle("active");
    verificar()
})
function verificar()
{
    if(buttonMenu.classList.contains("active"))
    {
        menu.style.left="0";
    }
    else
    {
        menu.style.left="100%";
    }
}
function menuResize()
{
    window.addEventListener("resize", function() {
        if (window.innerWidth > 1000) {
            buttonMenu.classList.remove("active");
            menu.style.left = "100%";
        }
    });
}
menuResize();