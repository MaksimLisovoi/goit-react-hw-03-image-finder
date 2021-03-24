import React, { Component } from "react";
import s from "./Searchbar.module.css";
import Modal from "../Modal/Modal";

class Searchbar extends Component {
  state = {
    queryVal: "",
  };

  handleChange = (e) => {
    // this.setState((prev) => ({ queryValue: e.target.value }));
    this.setState({ queryVal: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;

    onSubmit(this.state.queryVal);

    this.state.queryVal = "";
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { queryVal } = this.state;
    return (
      <>
        <header className={s.Searchbar}>
          <form className={s.SearchForm} onSubmit={handleSubmit}>
            <button type="submit" className={s.SearchFormButton}>
              <span className={s.SearchFormButtonLabel}>Search</span>
            </button>

            <input
              className={s.SearchFormInput}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={handleChange}
              value={queryVal}
            />
          </form>
        </header>
      </>
    );
  }
}

export default Searchbar;
