import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getImg } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';

export const gallery = document.querySelector('.gallery');
const form = document.querySelector('.form');
export const inputValue = document.querySelector('.input-value-js');
export const loader = document.querySelector('.form-container div');

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();
  gallery.innerHTML = '';
  if (inputValue.value.trim() === '') {
    return;
  }
  loader.classList.add('loader');

  getImg().then(data => {
    if (data.total === 0) {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    }

    createMarkup(data.hits);
    const lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
    lightbox.refresh();
  });
  form.reset();
}
