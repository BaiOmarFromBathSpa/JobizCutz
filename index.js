let ScrollGallery = document.getElementsByClassName("ScrollGallery");

AnimateScrollGallery();

function AnimateScrollGallery() {
    for (i in ScrollGallery) {
        const Width = ((ScrollGallery[i].offsetWidth) *-1) + ScrollGallery[i].parentNode.clientWidth;
        //console.log(Width);
        ScrollGallery[i].style.translate = Width + "px";
    }
}