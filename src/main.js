import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getImg, limit } from './js/pixabay-api';

import { renderGalleryMarkup } from './js/render-functions';

const galleryList = document.querySelector('.gallery-list');
const formSearch = document.querySelector('form');
const input = document.querySelector('input');
const loadingBefore = document.querySelector('.form-container div');
const loadingAfter = document.querySelector('.loading');
const loadMoreImgBtn = document.querySelector('.load-more-markup');
const lightbox = new SimpleLightbox('.gallery-list a', {
  captionsData: 'alt',
  captionDelay: 250,
});

let curentPage;
let curentQuery;

loadMoreImgBtn.classList.add('hidden');

formSearch.addEventListener('submit', onSubmitForm);

async function onSubmitForm(event) {
  event.preventDefault();

  curentPage = 1;
  curentQuery = input.value.trim();
  galleryList.innerHTML = '';

  if (curentQuery === '') {
    showErrorMessege('Sorry, input is emty!', '#FFA000');
    return;
  }
  loadingBefore.classList.add('loader');
  try {
    const data = await getImg(curentPage, curentQuery);
    if (data.total === 0) {
      showErrorMessege(
        'Sorry, there are no images matching your search query. Please try again!',
        '#EF4040'
      );
      formSearch.reset();
      return;
    }
    console.log(data.hits);
    renderGalleryMarkup(data.hits, galleryList);
    lightbox.refresh();
    console.log(data.hits);
  } catch (error) {
    showErrorMessege('Error', '#EF4040');
  }
  formSearch.reset();
}

loadMoreImgBtn.addEventListener('click', onClickLoadMoreBtn);

async function onClickLoadMoreBtn(event) {
  curentPage++;
  try {
    const data = getImg(curentPage, curentQuery);
    renderGalleryMarkup(data.hits, galleryList);
    window.scrollBy({
      top: 575.6666870117188,
      behavior: 'smooth',
    });
    if (data.hits.length < limit) {
      loadMoreImgBtn.classList.add('hidden');
      return showErrorMessege(
        "We're sorry, but you've reached the end of search results."
      );
    }
    lightbox.refresh();
  } catch (error) {
    showErrorMessege('Error');
  }
}

function showErrorMessege(message, backgroundColor) {
  iziToast.info({
    position: 'topRight',
    message: message,
    messageColor: '#ffffff',
    backgroundColor: backgroundColor,
    messageSize: 16,
    layout: 2,
    maxWidth: 380,
  });
}
