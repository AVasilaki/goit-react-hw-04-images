// import { Component } from 'react';
// import { Searchbar } from './Searchbar/Searchbar';

// import { ImageGallery } from './ImageGallery/ImageGallery';
// import { Button } from './Button/Button';
// import { Audio } from 'react-loader-spinner';
// import { fetchApi } from 'api/api';

// export class App extends Component {
//   state = {
//     keyWord: '',
//     images: [],
//     page: 1,
//     loader: false,
//   };

//   onLoadMore = () => {
//     this.setState(prevState => ({
//       page: (prevState.page = prevState.page + 1),
//       loader: true,
//     }));
//     console.log(this.state.page);
//   };

//   onChange = evt => {
//     evt.preventDefault();
//     const form = evt.currentTarget;
//     this.setState({
//       keyWord: form.elements.keyword.value,
//       images: [],
//       page: 1,
//     });
//   };

//   async componentDidUpdate(_, prew) {
//     const keyWord = this.state.keyWord;
//     const page = this.state.page;

//     if (prew.keyWord !== keyWord || prew.page !== page) {
//       this.setState({ loader: true });
//       console.log(' pre page', prew.page, 'page', page);
//       try {
//         const resp = await fetchApi(page, keyWord);

//         this.setState(prevState => ({
//           images: [...prevState.images, ...resp.data.hits],
//         }));
//         console.log(resp);
//         console.log(page);
//         return resp;
//       } catch (error) {
//         console.error(error);
//         alert('something wrong');
//         return error;
//       } finally {
//         this.setState({ loader: false });
//       }
//     }
//   }
//   render() {
//     return (
//       <div>
//         <Searchbar onChange={this.onChange}></Searchbar>
//         <ImageGallery galery={this.state.images}></ImageGallery>
//         <Audio visible={this.state.loader} />
//         <Button
//           galery={this.state.images.length}
//           onLoadMore={this.onLoadMore}
//         ></Button>
//       </div>
//     );
//   }
// }
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
  };
  useEffect(() => {
    async function getI() {
      try {
        const resp = await fetchApi(page, keyword);
        setImages(resp.data.hits);
        console.log('images', images);
        // return resp;
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
