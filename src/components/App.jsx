import { useEffect, useState } from 'react';
import { Box } from 'components/Box';
import { SearchBar } from './SearchBar/SearchBar';
import * as API from './services/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const [searchText, setSearchText] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!searchText) {
      return;
    }
    searchImages(searchText, page);
  }, [page, searchText]);

  const searchImages = async (query, page) => {
    try {
      if (page === 1) {
        setIsLoading(true);
      }
      const images = await API.getImages(query, page);
      if (images.length === 0) {
        toast.error(`There are no '${query}' images`);
        setIsLoading(false);
        return;
      } else {
        setImages(prevState => [...prevState, ...images]);
        setIsLoading(false);
      }
    } catch (error) {
      toast.warn(error);
    }
  };

  const handleFormSubmit = query => {
    if (!query) {
      toast.info(`Please enter some text to search`);
      return;
    }
    if (query !== searchText) {
      setSearchText(query);
      setPage(1);
      setImages([]);
    } else
      toast.info(
        `You've just done '${searchText}' search before. If you want more '${searchText}' images, please click the 'Load more' button below`
      );
  };

  const loadMore = event => {
    event.preventDefault();
    setIsLoading(false);
    setPage(prevState => prevState + 1);
  };
  return (
    <Box as="main" p="4">
      <SearchBar onSubmit={handleFormSubmit} />
      {isLoading ? <Loader /> : <ImageGallery images={images} />}

      {images.length > 0 && <Button onClick={event => loadMore(event)} />}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Box>
  );
};
