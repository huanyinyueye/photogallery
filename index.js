const imageItem = document.getElementsByClassName("image-item");
const imageboxContainer = document.createElement("div");
const imageboxContent = document.createElement("div");
const imageboxImg = document.createElement("img");
const imageboxPrev = document.createElement("div");
const imageboxNext = document.createElement("div");

imageboxContainer.classList.add("imagebox");                            //<div class="imagebox"></div>
imageboxContent.classList.add("imagebox-content");                      //<div class="imagebox-content"></div>
imageboxPrev.classList.add("fa", "fa-arrow-left", "imagebox-prev");     //<div class="fa fa-arrow-right imagebox-prev"></div>
imageboxNext.classList.add("fa", "fa-arrow-right", "imagebox-next");    //<div class="fa fa-arrow-right imagebox-next"></div>
imageboxPrev.style.fontSize = "30px";           //<div class="fa fa-arrow-right imagebox-prev" style="font-size:30px"></div>
imageboxNext.style.fontSize = "30px";           //<div class="fa fa-arrow-right imagebox-next" style="font-size:30px"></div>

imageboxContainer.appendChild(imageboxContent);
imageboxContent.appendChild(imageboxImg);
imageboxContent.appendChild(imageboxPrev);
imageboxContent.appendChild(imageboxNext);
document.body.appendChild(imageboxContainer);
/*
    <body>
        <div class="image-container">
            ............
        </div>
        <div class="imagebox">
            <div class="imagebox-content">
                <img></img>
                <div class="fa fa-arrow-right imagebox-prev" style="font-size:30px"></div>
                <div class="fa fa-arrow-right imagebox-next" style="font-size:30px"></div>
            </div>
        </div> 
    </body>
*/


let index = 1;
function showimagebox(n) {
    if (n > imageItem.length) {
        index = 1;
    }
    else if (n < 1) {
        index = imageItem.length;
    }
    let imageLocation = imageItem[index - 1].children[0].getAttribute("src");
    imageboxImg.setAttribute("src", imageLocation);
}

function currentImage() {
    imageboxContainer.style.display = "block";

    let imageIndex = parseInt(this.getAttribute("data-index"));
    showimagebox(index = imageIndex);
}
for (let i = 0; i < imageItem.length; i++) {
    imageItem[i].addEventListener("click", currentImage);
}

function slideImage(n) {
    showimagebox(index += n);
}
function prevImage() {
    slideImage(-1);
}
function nextImage() {
    slideImage(1);
}
imageboxPrev.addEventListener("click", prevImage);
imageboxNext.addEventListener("click", nextImage);

function closeimagebox() {
    if (this === event.target) {
        imageboxContainer.style.display = "none";
    }
}
imageboxContainer.addEventListener("click", closeimagebox);