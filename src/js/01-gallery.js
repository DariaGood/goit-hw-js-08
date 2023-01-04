// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// Opisany w dokumentacji
import SimpleLightbox from 'simplelightbox';
// Dodatkowy import stylów
import 'simplelightbox/dist/simple-lightbox.min.css';


const gallery = document.querySelector('.gallery');

// adding all images from gallery-items.js to element with class .gallery in HTML

gallery.insertAdjacentHTML(
  'afterbegin',
  galleryItems
    .map(
      galleryItem =>
        `<a class="gallery__item" href="${galleryItem.original}">
        <img class="gallery__image"
        src="${galleryItem.preview}" 
        alt= "${galleryItem.description}"></a>`
    )
    .join('')
);

// SimpleLightbox - https://simplelightbox.com

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});