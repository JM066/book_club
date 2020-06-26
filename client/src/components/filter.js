import React, { Component } from 'react'
import "./filter.css";


export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // books: []
    };
  }

  getBookclub = (genredata) => {
    const data = {genre: genredata};
    fetch(`/books/genre/${genredata}`)
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        // this.setState({ books: data });
        this.props.filterBook(data);
      });
  };

  handleDropdown(e) {
    this.getBookclub(e.target.value);
  }

  getBookclub = (yeardata) => {
    const data = {year: yeardata};
    fetch(`/books/year/${yeardata}`)
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        // this.setState({ books: data });
        this.props.filterBook(data);
      });
  };

  handleYear(e) {
    this.getBookclub(e.target.value);
  }




  render() {
    return (
      <div>
        <form>
        <h3>Genre</h3>
          <select onChange={this.handleDropdown.bind(this)}>
            <option name="fiction">fiction</option>
            <option name="autobiography">autobiography</option>
          </select>
          <h3>Publication Year</h3>
          <select onChange={this.handleYear.bind(this)}>
            <option name="2020">2020</option>
            <option name="2019">2019</option>
            <option name="2019">2018</option>
            <option name="2019">2017</option>
            <option name="2019">2016</option>
          </select>
        </form>
      </div>
    );
  }
}




