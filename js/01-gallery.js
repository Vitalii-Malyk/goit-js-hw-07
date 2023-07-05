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
        data-source="${image.original}"
        alt="${image.description}"
        />
    </a>
</li>`;
  })
  .join("");

const imageslistEl = document.querySelector(".gallery");

imageslistEl.insertAdjacentHTML("beforeend", imagesListArr);

document.querySelector("ul.gallery").onclick = (event) => {
  event.preventDefault();
  console.log(event.target.dataset.source);
  if (event.target.tagName === "IMG") {
    const instance = basicLightbox.create(
      `<img width="1250" height="850" src="${event.target.dataset.source}">`
    );
    instance.show(basicLightbox);

    window.addEventListener("keydown", onEscKeyPress);
    function onEscKeyPress(event) {
      if (event.code === "Escape") {
        instance.close(() => {
          window.removeEventListener("keydown", onEscKeyPress);
          console.log("Знімається прослуховувач");
        });
      }
    }
  }
};
