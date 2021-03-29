import React, { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";

import s from "./ImageGallery.module.css";
import shortid from "shortid";

import x from "../../services/pixabayApi";
const { getFetch } = x;

class ImageGallery extends Component {
  state = {
    showModal: false,
    elem: null,
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };
  getElem = (elem) => {
    this.toggleModal();
    this.setState({ elem });
  };
  render() {
    const { gallery, total, onClick } = this.props;
    const { elem, showModal } = this.state;
    const shouldRenderLoadMoreBtn =
      gallery.length > 0 && gallery.length < total;

    return (
      <div className={s.GalleryContainer}>
        <ul className={s.ImageGallery}>
          {gallery.map((el) => (
            <ImageGalleryItem
              key={shortid.generate()}
              el={el}
              getElem={this.getElem}
            />
          ))}
        </ul>
        {showModal && (
          <Modal toggleModal={this.toggleModal}>
            <img src={elem} alt="img" className={s.modalImg}></img>
          </Modal>
        )}
        {shouldRenderLoadMoreBtn && (
          <Button onClick={onClick}>Load more</Button>
        )}
      </div>
    );
  }
}

export default ImageGallery;
