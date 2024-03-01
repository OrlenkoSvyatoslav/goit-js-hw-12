import { gallery } from '../main';

export function renderGalleryMarkup(img) {
  const markup = img
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="gallery-item">
                    <a href="${largeImageURL}">
                        <img class="gallery-image"
                            src="${webformatURL}" 
                            alt="${tags}" />
                    </a>
                    <ul class="image-info">
                        <li class="image-info-item">Likes<p class="info">${likes}</p></li>
                        <li class="image-info-item">Views<p class="info">${views}</p></li>
                        <li class="image-info-item">Comments<p class="info">${comments}</p></li>
                        <li class="image-info-item">Downloads<p class="info">${downloads}</p></li>
                    </ul>
                </li>`;
      }
    )
    .join('');

  gallery.innerHTML = markup;
}
