let ScrollGallery = document.getElementsByClassName("ScrollGallery");

const HeaderItems = document.getElementsByClassName("headerItems");
const HamburgerBtn = document.getElementById("HamburgerMenu");

AnimateScrollGallery();

function AnimateScrollGallery() {
    for (i in ScrollGallery) {
        const Width = ((ScrollGallery[i].offsetWidth) *-1) + ScrollGallery[i].parentNode.clientWidth;
        //console.log(Width);
        ScrollGallery[i].style.translate = Width + "px";
    }
}

function HamburgerToggle() {
    const HeaderStatus = window.getComputedStyle(HeaderItems[0]).display;
    if (HeaderStatus == "none") {
        HamburgerBtn.setAttribute("src", "./Assets/Imgs/Ham_Open.png");
        for (let index = 0; index < HeaderItems.length; index++) {
            HeaderItems[index].style.display = "flex"
        }
        HamburgerClosed = false;
    } else {
        HamburgerBtn.setAttribute("src", "./Assets/Imgs/Ham_Closed.png");
        for (let index = 0; index < HeaderItems.length; index++) {
            HeaderItems[index].style.display = "none"
        }
        HamburgerClosed = true;
    }
}