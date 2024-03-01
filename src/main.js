import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getImg } from './js/pixabay-api';
import { renderGalleryMarkup } from './js/render-functions';

export const gallery = document.querySelector('.gallery');
export const form = document.querySelector('.form');
const input = document.querySelector('.input-value-js');
export const loader = document.querySelector('.form-container div');

form.addEventListener('submit', onSubmitForm);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function onSubmitForm(event) {
  event.preventDefault();
  gallery.innerHTML = '';
  const inputValue = input.value.trim();
  if (inputValue === '') {
    return;
  }
  loader.classList.add('loader');

  getImg(inputValue).then(data => {
    if (data.total === 0) {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    }

    renderGalleryMarkup(data.hits);

    loader.classList.remove('loader');

    lightbox.refresh();
  });
  form.reset();
}
