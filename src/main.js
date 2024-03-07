import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getImg, limit } from './js/pixabay-api';
import { renderGalleryMarkup } from './js/render-functions';

const galleryList = document.querySelector('.gallery-list');
const formSearch = document.querySelector('.form');
const input = document.querySelector('.input-value-js');
const loadingBefore = document.querySelector('.form-container div');
const loadingAfter = document.querySelector('.loading');
const loadMoreImgBtn = document.querySelector('.load-more-markup');

// SimpleLightbox //

const lightbox = new SimpleLightbox('.gallery-list a', {
  captionsData: 'alt',
  captionDelay: 250,
});
//

let curentPage;
let curentQuery;

loadMoreImgBtn.classList.add('hidden');

// Search IMG event //
formSearch.addEventListener('submit', onSubmitForm);

async function onSubmitForm(event) {
  event.preventDefault();
  curentPage = 1;
  curentQuery = input.value.trim();
  galleryList.innerHTML = null;
  loadMoreImgBtn.classList.add('hidden');

  if (curentQuery === '') {
    showErrorMessege('Sorry, input is emty!', '#FFA000');
    return;
  }
  loadingBefore.classList.add('loader');

  try {
    const data = await getImg(curentPage, curentQuery);

    if (data.total === 0) {
      loadingBefore.classList.add('loader');
      showErrorMessege(
        'Sorry, there are no images matching your search query. Please try again!',
        '#EF4040'
      );
      loadingBefore.classList.remove('loader');
      loadMoreImgBtn.classList.add('hidden');
      formSearch.reset();
      return;
    }

    renderGalleryMarkup(data.hits, galleryList);
    lightbox.refresh();

    loadingBefore.classList.remove('loader');
    loadMoreImgBtn.classList.remove('hidden');
  } catch (error) {
    showErrorMessege('Error', '#EF4040');
  }
  formSearch.reset();
}
//

// Load more event //

loadMoreImgBtn.addEventListener('click', onClickLoadMoreBtn);

async function onClickLoadMoreBtn(event) {
  curentPage++;
  loadingAfter.classList.add('loader');
  loadMoreImgBtn.classList.add('hidden');
  try {
    const data = await getImg(curentPage, curentQuery);
    renderGalleryMarkup(data.hits, galleryList);

    window.scrollBy({
      top: 800,
      behavior: 'smooth',
    });

    if (data.totalHits < limit) {
      loadMoreImgBtn.classList.add('hidden');
      loadingAfter.classList.remove('loader');
      return showErrorMessege(
        "We're sorry, but you've reached the end of search results.",
        '#FFA000'
      );
    }
    lightbox.refresh();
    loadingAfter.classList.remove('loader');
    loadMoreImgBtn.classList.remove('hidden');
  } catch (error) {
    showErrorMessege('Error');
  }
}
//

// Show Error //
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
