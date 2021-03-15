import "./App.css";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";

import React, { Component } from "react";

class App extends Component {
  state = {};

  render() {
    const {} = this.state;

    return (
      <>
        <Searchbar />
        <ImageGallery />
      </>
    );
  }
}
export default App;
