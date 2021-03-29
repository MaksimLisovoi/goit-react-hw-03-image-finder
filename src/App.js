import "./App.css";
import React, { Component } from "react";

import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import x from "../src/services/pixabayApi";
const { getFetch } = x;

class App extends Component {
  state = {
    query: "",
    page: 1,
    gallery: [],
    total: 0,
    msg: "",
    isLoading: false,
    selectedImg: "",
    // shouldRender: false,
  };

  async componentDidMount() {
    // const { query, page, gallery } = this.state;
    // getFetch(query, page).then((result) => {
    //   this.setState({ gallery: [...result] });
    // });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchGalleryItems();
    }
  }

  fetchGalleryItems = () => {
    const { query, page } = this.state;

    this.setState({ isLoading: true });

    getFetch(query, page)
      .then((result) => {
        if (result.hits.length) {
          this.setState((prevState) => ({
            gallery: [...prevState.gallery, ...result.hits],
            total: result.total,
            page: prevState.page + 1,
          }));

          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        } else {
          this.setState({ msg: "Nothing to show by your request" });

          alert(this.state.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  getQuery = (query) => {
    this.setState({ query, page: 1, gallery: [] });
  };

  render() {
    const { gallery, isLoading, total } = this.state;
    const { getQuery, fetchGalleryItems } = this;

    return (
      <>
        <Searchbar onSubmit={getQuery} />

        <ImageGallery
          total={total}
          gallery={gallery}
          onClick={fetchGalleryItems}
        />
        {isLoading && (
          <Loader
            type="Circles"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        )}
      </>
    );
  }
}
export default App;
