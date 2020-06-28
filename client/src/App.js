import React, { Component } from 'react'
import Filter from "./components/filter"
//import Overlay from "./components/overlay"
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books:[],
      bookdetails: false,
      showBook: []
    };
  }

  componentDidMount() {
    this.getBookclub();
  }

  getBookclub = () => {
    fetch(`/books`)
      .then(response => response.json())
      .then(response => {
        this.setState({ books: response });
      });
  };

  getBookdetails = (id) => {
    const data = {books : id};
    fetch(`/books/${id}`)
      .then(response => response.json())
      .then(response => {
        this.setState({ 
          showBook: response });
      });
  };

  handleClick(e){
    // e.preventdefault();
    this.setState({
      bookdetails: !this.state.bookdetails
    });           
  }

  renderLibrary() {
  return this.state.books.map((books,id) => {
    return(
      <li key={id} className="book-list">
        <span onClick ={() => this.getBookclub(books.id)}>
          <div className="book-cover">
          <img onClick={(e) => this.handleClick()} src={books.cover} alt={books.title} className="book-cover"/>                    
          </div>
          <div className={this.state.bookdetails ? "bookdetails" : "bookhidden"}>





          {/* <h4>{books.title}</h4>
          <h5>{books.author}</h5>
          <p>{books.summary}</p> */}
          </div>
          <br></br>
          <br></br>
        </span>
      </li>
    )
  })}











































  

  filterBook(filteredList){
    this.setState({
      books: filteredList
    })
  }

  render() {
    return (
      <div>
        <h1>London Book Club</h1>
        <div>
          <Filter filterBook={filteredList => this.filterBook(filteredList)}/>
        </div>
        <ul>
          <div className="all-books">
            {this.renderLibrary()}
          </div>
        </ul>
      </div>
    );
  }
}
