document.getElementById("outer3").addEventListener("click", toggleState3);

function toggleState3() {
    let galleryView = document.getElementById("galleryView")
    let tilesView = document.getElementById("tilesView")
    let outer = document.getElementById("outer3");
    let slider = document.getElementById("slider3");
    let tilesContainer = document.getElementById("tilesContainer");
    if (slider.classList.contains("active")) {
        slider.classList.remove("active");
        outer.classList.remove("outerActive");
        galleryView.style.display = "flex";
        tilesView.style.display = "none";

        while (tilesContainer.hasChildNodes()) {
            tilesContainer.removeChild(tilesContainer.firstChild)
        }
    } else {
        slider.classList.add("active");
        outer.classList.add("outerActive");
        galleryView.style.display = "none";
        tilesView.style.display = "flex";

        for (let i = 0; i < imgObject.length; i++) {
            let tileItem = document.createElement("div");
            tileItem.classList.add("tileItem");
            tileItem.style.background =  "url(" + imgObject[i] + ")";
            tileItem.style.backgroundSize = "contain";
            tilesContainer.appendChild(tileItem);
        }
    };
}

let imgObject = [
    "https://img.wattpad.com/876f51b720e07c70a2e4a989a1c59b1502a7901c/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f32475f7476485676684737676a673d3d2d3433373334373433332e313463663339396138366163306432613233383935313235383736382e6a7067?s=fit&w=720&h=720",
    "https://i1.wp.com/i.pinimg.com/originals/69/27/49/69274948e43a5808e510b3d37595505b.jpg",
    "https://data.whicdn.com/images/312587673/original.jpg",
    "https://fsa.zobj.net/crop.php?r=3u-fUTP3mwMMHqjHJIW71baZeml8VqGWv_aix9wFNiKGgwuQVsHDoYGBxEn9lLyIjPxk1UOt-Uap-bRI6mYMdLZzq_Gw3nEQImJdHdnMylkrgWPmpS6F1ujBcEq71mBb44Y4Ymribw_NTln3",
];

let mainImg = 0;
let prevImg = imgObject.length - 1;
let nextImg = 1;

function loadGallery() {

    let mainView = document.getElementById("mainView");
    mainView.style.background = "url(" + imgObject[mainImg] + ")";

    let leftView = document.getElementById("leftView");
    leftView.style.background = "url(" + imgObject[prevImg] + ")";

    let rightView = document.getElementById("rightView");
    rightView.style.background = "url(" + imgObject[nextImg] + ")";

    let linkTag = document.getElementById("linkTag")
    linkTag.href = imgObject[mainImg];

};

function scrollRight() {

    prevImg = mainImg;
    mainImg = nextImg;
    if (nextImg >= (imgObject.length -1)) {
        nextImg = 0;
    } else {
        nextImg++;
    };
    loadGallery();
};

function scrollLeft() {
    nextImg = mainImg
    mainImg = prevImg;

    if (prevImg === 0) {
        prevImg = imgObject.length - 1;
    } else {
        prevImg--;
    };
    loadGallery();
};

document.getElementById("navRight").addEventListener("click", scrollRight);
document.getElementById("navLeft").addEventListener("click", scrollLeft);
document.getElementById("rightView").addEventListener("click", scrollRight);
document.getElementById("leftView").addEventListener("click", scrollLeft);
document.addEventListener('keyup',function(e){
    if (e.keyCode === 37) {
        scrollLeft();
    } else if(e.keyCode === 39) {
        scrollRight();
    }
});

loadGallery();



