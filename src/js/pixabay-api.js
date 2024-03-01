import { inputValue } from '../main';

export function getImg() {
  const key = '42577759-46afea0faf18c5517840853c6';
  const baseURL = 'https://pixabay.com/api/?key=';
  const query = inputValue.value;

  const URL =
    baseURL +
    key +
    '&q=' +
    query +
    '&image_type=photo&orientation=horizontal&safesearch=true';

  return fetch(URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error with status ${response.status}`);
      }
      return response.json();
    })
    .catch(error => {
      console.log(error);
    });
}
