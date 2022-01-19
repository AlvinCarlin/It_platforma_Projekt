var navMobileList = document.getElementById("nav-mobile-list");
navMobileList.style.display = "none";
navMobileList.addEventListener("click", showMobileNav);

function showMobileNav() {
    if (navMobileList.style.display === "none") 
    {
        navMobileList.style.display = "block";
    } 
    else 
    {
        navMobileList.style.display = "none";
    }
} 