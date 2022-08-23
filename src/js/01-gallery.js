// import { galleryItems } from './gallery-items.js';

import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const imagesContainer = document.querySelector('.gallery');
const imageCard = onCreateGalleryItem(galleryItems);
// let openOriginalImage;

imagesContainer.insertAdjacentHTML('beforeend', imageCard);
// imagesContainer.addEventListener('keydown', onEscToCloseImage);

function onCreateGalleryItem(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
            <a class ="gallery__link" href='${original}'>
            <img
            class ="gallery__image lazyload"

            data-src = "${preview}"
            data-source = "${original}"
            alt = "${description}"/>
            </a>`;
    })
    .join('');
}

new SimpleLightbox('.gallery a', {
  disableRightClick: true,
  scrollZoom: false,
  captionDelay: 250,
  captionData: 'alt',
});
