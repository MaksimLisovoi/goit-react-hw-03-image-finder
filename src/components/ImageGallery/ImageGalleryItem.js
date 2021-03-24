import React from "react";

import s from "./ImageGallery.module.css";

const ImageGalleryItem = ({ el, getElem }) => {
  const { webformatURL, largeImageURL } = el;
  return (
    <li
      className={s.ImageGalleryItem}
      onClick={() => {
        getElem(largeImageURL);
      }}
    >
      <img src={webformatURL} alt="img" className={s.ImageGalleryItemImage} />
    </li>
  );
};
export default ImageGalleryItem;
