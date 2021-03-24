import React, { Component } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

export default class Modal extends Component {
  state = {};

  componentDidMount() {
    const { handleEsc } = this;
    window.addEventListener("keydown", handleEsc);
  }

  componentWillUnmount() {
    const { handleEsc } = this;
    window.removeEventListener("keydown", handleEsc);
  }

  handleClose = (e) => {
    const { toggleModal } = this.props;

    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };
  handleEsc = (e) => {
    const { toggleModal } = this.props;
    if (e.code === "Escape") {
      toggleModal();
    }
  };
  render() {
    const { children } = this.props;
    return createPortal(
      <div className={s.backDrop} onClick={this.handleClose}>
        <div className={s.content}>{children}</div>
      </div>,
      modalRoot
    );
  }
}
