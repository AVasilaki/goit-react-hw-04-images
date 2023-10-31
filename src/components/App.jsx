import { useEffect, useState } from 'react';
import { Button } from './Button/Button';
import { fetchApi } from 'api/api';
import { Searchbar } from './Searchbar/Searchbar';
import { Audio } from 'react-loader-spinner';
import { ImageGallery } from './ImageGallery/ImageGallery';
export const App = () => {
  const [keyword, setKeyword] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false);

  const onLoadMore = () => {
    setPage(page + 1);
    setLoader(true);
  };

  const onChange = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    setKeyword(form.elements.keyword.value);
    setImages([]);
    setPage(1);
  };
  useEffect(() => {
    if (!keyword) return;
    setLoader(true);
    async function getI() {
      try {
        const resp = await fetchApi(page, keyword);
        setImages(p => [...p, ...resp.data.hits]);
      } catch (error) {
        console.error(error);
        alert('something wrong');
        return error;
      } finally {
        setLoader(false);
      }
    }
    getI();
  }, [page, keyword]);
  return (
    <div>
      <Searchbar onChange={onChange}></Searchbar>
      <ImageGallery galery={images}></ImageGallery>
      <Audio visible={loader} />
      <Button galery={images.length} onLoadMore={onLoadMore}></Button>
    </div>
  );
};
