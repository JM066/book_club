import React from "react";
import "./bookView.css";



class BookView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  };



handleClick(books) {
  this.setState({
    title: books.title,
    author: books.author,
    year: books.year,      
    country: books.country,
    summary: books.summary,
    genre: books.genre,
    cover: books.cover,
  })
}


  render() {
    return <div>
      <div>
        <img src = {this.state.cover} alt = {this.state.title}/>
        <h3>{this.state.title}</h3>
        <p>{this.state.summary}</p>
      </div>
      </div>;
  }
}


export default BookView;
