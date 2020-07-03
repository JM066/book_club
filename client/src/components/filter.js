import React, { Component } from 'react'
import "./filter.css";


export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  getFiltered = (genredata) => {
    // const data = {genre: genredata};
    fetch(`/books/genre/${genredata}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.props.filterBook(data);
      });
  };

  handleDropdown = (e) => {
    console.log(e.target.value)
    this.getFiltered(e.target.value);
  }


  render() {
    return (
      <div>
        <form className="book-filters">
          <select onChange={this.handleDropdown.bind(this)}>
            <option name="fiction">Fiction</option>
            <option name="autobiography">Autobiography</option>
            <option name="lifestyle">Lifestyle</option>
          </select>
        </form>
      </div>
    );
  }
}




