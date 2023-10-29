import { ImageGaleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ galery }) => {
  console.log('galery', galery);
  if (galery.length !== 0) {
    return (
      <ul className="ImageGallery">
        {galery.map(item => (
          <ImageGaleryItem key={item.id} item={item}></ImageGaleryItem>
        ))}
      </ul>
    );
  } else return;
};
