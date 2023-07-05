import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const imagesListArr = galleryItems
  .map((image, index) => {
    return `
<li class="gallery__item">
    <a class="gallery__link" href="${image.original}">
        <img
        class="gallery__image"
        src="${image.preview}"
        alt="${image.description}"
        />
    </a>
</li>`;
  })
  .join("");

const imageslistEl = document.querySelector(".gallery");

imageslistEl.insertAdjacentHTML("beforeend", imagesListArr);

imageslistEl.addEventListener("click", showAlt);

function showAlt(event) {
  event.preventDefault();
  event.stopPropagation();
  if (event.target.tagName === "IMG") {
    let gallery = new SimpleLightbox(".gallery a", {
      captionsData: "Alt",
      captionDelay: 250,
    });

    gallery.on("closed.simplelightbox", function () {
      imageslistEl.removeEventListener("click", showAlt);
      console.log("Знімається прослуховувач");
    });
  }
}
