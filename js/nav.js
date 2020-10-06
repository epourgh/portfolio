
mobileNavToggle = () => {
    
    let nav = document.getElementById("left-nav");
    let hamburger = document.getElementById("mobile-nav-toggle-hamburger");

    if(nav.style.display == "none") {
        console.log('was none')
        nav.style.display = "block";
        hamburger.style.display = "none";
    } else {
        hamburger.style.display = "block";
        nav.style.display = "none";
    }

}

document.getElementById("mobile-nav-toggle-exit").addEventListener("click", mobileNavToggle);
document.getElementById("mobile-nav-toggle-hamburger").addEventListener("click", mobileNavToggle);
