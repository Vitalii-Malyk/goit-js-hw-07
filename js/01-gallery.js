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

imageslistEl.addEventListener("click", openModal);

function openModal(event) {
  event.preventDefault();
  const instance = basicLightbox.create(
    `<img width="1250" height="850" src="${event.target.dataset.source}">`,
    {
      onShow: () => {
        imageslistEl.addEventListener("keydown", EscKeyCLickPress);
        window.addEventListener("click", EscKeyCLickPress);
      },
      onClose: () => {
        imageslistEl.removeEventListener("keydown", EscKeyCLickPress);
        window.removeEventListener("click", EscKeyCLickPress);
        console.log("Знято всі прослуховувачі");
      },
    }
  );

  instance.show();

  function EscKeyCLickPress(event) {
    if (event.code !== "Escape" || !instance) {
      return;
    } else {
      instance.close();
    }
  }
}
