export function renderGalleryMarkup(hits, galleryList) {
  const markup = hits
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

  galleryList.insertAdjacentElement('beforeend', markup);
}
