import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');
const cards = renderImg(galleryItems);

galleryEl.insertAdjacentHTML('afterBegin', cards);

function renderImg(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<a class = 'gallery__item' href = '${original}'>
    <img class='gallery__image' src='${preview}' alt='${description}'>
    </a>`;
    })
    .join('');
}

console.log(galleryEl);

const lightbox = new SimpleLightbox('.gallery a', {
    captionSelector: 'img',
    captionPosition: 'bottom',
    captionsData: 'alt',
    captionsType: 'alt',
    captionDelay: 250,
});

// console.log('lightbox', lightbox);