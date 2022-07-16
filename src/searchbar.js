import React, { useState } from "react";
import "./searchbar.css";

export default function Searchbar(props) {
  
  function handleSubmit(event) {
    event.preventDefault()
    props.submit()
  }
  function ChangeCity(event) {
    props.setCity(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3 searchholder">
        <input
          type="search"
          className="form-control"
          placeholder="search city here..."
          aria-label="search city here..."
          aria-describedby="button-addon2"
          id="searchinput"
          autoComplete="off"
          onChange={ChangeCity}
        />
        <button
          className="btn btn-outline-secondary searchbutton"
          type="button"
          id="button-addon2"
          onClick={handleSubmit}
        >
          <img className="searchicon" src="/icons8-search.svg" alt="" />
        </button>
      </div>
    </form>
  );
}