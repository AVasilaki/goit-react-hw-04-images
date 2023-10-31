// import { useEffect, useState } from 'react';
// import { Button } from './Button/Button';
// import { fetchApi } from 'api/api';
// import { Searchbar } from './Searchbar/Searchbar';
// import { Audio } from 'react-loader-spinner';
// import { ImageGallery } from './ImageGallery/ImageGallery';
// export const App = () => {
//   const [keyword, setKeyword] = useState('');
//   const [images, setImages] = useState([]);
//   const [page, setPage] = useState(1);
//   const [loader, setLoader] = useState(false);

//   const onLoadMore = () => {
//     setPage((page = page + 1));
//     setLoader(true);
//   };

//   const onChange = evt => {
//     evt.preventDefault();
//     const form = evt.currentTarget;
//     setKeyword((keyword = form.elements.keyword.value));
//   };
//   useEffect(() => {
//     async function getI() {
//       try {
//         const resp = await fetchApi(page, keyword);
//         setImages(resp);
//         return resp;
//       } catch (error) {
//         console.error(error);
//         alert('something wrong');
//         return error;
//       } finally {
//         setLoader(false);
//       }
//     }
//     getI();
//   }, [page, keyword]);
//   return (
//     <div>
//       <Searchbar onChange={onChange}></Searchbar>
//       <ImageGallery galery={images}></ImageGallery>
//       <Audio visible={loader} />
//       <Button galery={images.length} onLoadMore={onLoadMore}></Button>
//     </div>
//   );
// };
