import { Modalw } from 'components/Modal/Modal';
import { useState } from 'react';

export const ImageGaleryItem = ({ item }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onOpenModal = () => {
    setIsOpenModal(true);
  };

  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <li className="ImageGalleryItem " onClick={onOpenModal}>
        <img
          className="ImageGalleryItem-image "
          src={item.webformatURL}
          alt=""
        />
      </li>
      <Modalw
        isOpen={isOpenModal}
        isClose={onCloseModal}
        large={item.largeImageURL}
      ></Modalw>
    </>
  );
};
