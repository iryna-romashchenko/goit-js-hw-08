import '../css/01-gallery.css';
import '../css/common.css';
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
// const imagesContainer = document.querySelector('.gallery');
// const imageCard = onCreateGalleryItem(galleryItems);

// imagesContainer.insertAdjacentHTML('beforeend', imageCard);
// function onCreateGalleryItem(galleryItems) {
//   return galleryItems

//     .map(({ original, preview, description }) => {
//       // return `
//       //       <a class ="gallery__link" href='${original}'>
//       //       <img class ="gallery__image lazyload"
//       //       data-src = "${preview}"
//       //        data-source = "${original}"
//       //       alt = "${description}"/>
//       //       </a>`;
//       return `
//             <a class ="gallery__item" href='${original}'>
//             <img class ="gallery__image" loading = "lazy"
//             data-src = "${preview}"
//             alt = "${description}"/>
//             </a>`;
//     })
//     .join('');
// }

// new SimpleLightbox('.gallery a', {
//   disableRightClick: true,
//   scrollZoom: false,
//   captionDelay: 250,
//   captionData: 'alt',
// });
console.log(galleryItems);
const imagesContainer = document.querySelector('.gallery');
const imageCards = galleryItems.map(({ original, preview, description }) => {
  const imageCard = `
            <a class ="gallery__item" href='${original}'>
            <img class ="gallery__image" loading = "lazy"
            data-src = "${preview}"
            alt = "${description}"
            title = "${description}"/>
            </a>`;
  return imageCard;
});
const stGallery = imageCards.join('');
imagesContainer.innerHTML = stGallery;

new SimpleLightbox('.gallery a', {
  disableRightClick: true,
  scrollZoom: false,
  captionDelay: 250,
  captionData: 'alt',
});
