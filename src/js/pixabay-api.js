import axios from 'axios';

export const limit = 15;
axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '42577759-46afea0faf18c5517840853c6';

export async function getImg(page, inputValue) {
  const { data } = await axios.get('', {
    params: {
      page: page,
      per_page: limit,
      key: API_KEY,
      q: inputValue,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
  return data;
}
