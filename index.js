const imageItem = document.getElementsByClassName("image-item");
const imageboxContainer = document.createElement("div");
const imageboxContent = document.createElement("div");
const imageboxImg = document.createElement("img");
const imageboxPrev = document.createElement("div");
const imageboxNext = document.createElement("div");
const imagePreviewbox = document.createElement("div");

imageboxContainer.classList.add("imagebox");
imageboxContent.classList.add("imagebox-content");
imageboxPrev.classList.add("fa", "fa-arrow-left", "imagebox-prev");
imageboxNext.classList.add("fa", "fa-arrow-right", "imagebox-next");
imageboxPrev.style.fontSize = "30px";
imageboxNext.style.fontSize = "30px";
imagePreviewbox.classList.add("image-box-preview");


imageboxContainer.appendChild(imageboxContent);
imageboxContent.appendChild(imageboxImg);
imageboxContent.appendChild(imageboxPrev);
imageboxContent.appendChild(imageboxNext);
imageboxContent.appendChild(imagePreviewbox);
document.body.appendChild(imageboxContainer);

imagePreviewbox.innerText="Put preview image here......";  /* ********** */

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


/* Change image with arrow */
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


/* Click blank part to close the imagebox */
function closeimagebox() {
    if (this === event.target) {
        imageboxContainer.style.display = "none";
    }
}
imageboxContainer.addEventListener("click", closeimagebox);