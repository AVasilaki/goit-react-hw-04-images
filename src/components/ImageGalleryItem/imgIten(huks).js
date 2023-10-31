import { Modalw } from 'components/Modal/Modal';
import { useState } from 'react';

export const ImageGaleryItem = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  onOpenModal = () => {
    setIsOpenModal(true);
  };

  onCloseModal = () => {
    setIsOpenModal(false);
  };

  const { item } = this.props;
  return (
    <>
      <li className="ImageGalleryItem " onClick={this.onOpenModal}>
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
