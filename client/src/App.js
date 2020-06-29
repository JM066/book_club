import React, { Component } from 'react'
import Filter from "./components/filter"
import Slider from "./components/slider"
//import Overlay from "./components/overlay"
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books:[],
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

  // getBookdetails = (id) => {
  //   const data = {books : id};
  //   fetch(`/books/${id}`)
  //     .then(response => response.json())
  //     .then(response => {
  //       this.setState({ 
  //         showBook: response });
  //     });
  // };

  handleClick(e){
    for (let i = 0 ; i < this.state.books.length ; i++) {
      this.state.showBook[i] = false;
    }
    let bookShow = [...this.state.showBook];
    bookShow[e.target.name-1] = true;
    this.setState({
      showBook: bookShow
    });           
  }

  renderLibrary() {
  return this.state.books.map((books,id) => {
    return(
      <li key={id} className="book-list">
        <span onClick ={() => this.getBookclub(books.id)}>
          <div className="book-cover">
          <img onClick={(e) => this.handleClick(e)} name={books.id} src={books.cover} alt={books.title} className="book-cover"/>              
          </div>
          <div className={this.state.showBook[books.id-1] ? "bookDetails" : "bookhidden"}>
            <br/>
            <h5>{books.title}</h5>
          </div>
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
        <div className="App-header">
          <br/>
          <Slider />
        </div>
        <br/>
        <div>
          <Filter filterBook={filteredList => this.filterBook(filteredList)}/>
        </div>
        <br/>
        <ul>
          <div className="all-books">
            {this.renderLibrary()}
          </div>
        </ul>
      </div>
    );
  }
}