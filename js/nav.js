
mobileNavToggle = () => {
    
    let nav = document.getElementById("left-nav");
    let rightBody = document.getElementById("mobile-right-body")
    let hamburger = document.getElementById("mobile-nav-toggle-hamburger");

    if(nav.style.left == "-75vw") {
        console.log('was none')
        nav.style.left = "0vw";
        rightBody.style.left = "75vw";
        hamburger.style.display = "none";
    } else {
        hamburger.style.display = "block";
        nav.style.left = "-75vw";
        rightBody.style.left = "0vw";
    }

}

document.getElementById("mobile-nav-toggle-exit").addEventListener("click", mobileNavToggle);
document.getElementById("mobile-nav-toggle-hamburger").addEventListener("click", mobileNavToggle);
