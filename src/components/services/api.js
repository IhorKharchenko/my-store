import axios from 'axios';

// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getImages = async (searchText, page) => {
  const MY_KEY = '20010595-066be8f27561d2bd832683e36';
  const response = await axios.get(
    `?q=${searchText}&page=${page}&key=${MY_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
};
