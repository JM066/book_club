import React, { Component } from 'react'
import Filter from "./components/filter"
// import MySlider from "./components/slider"
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
          <div>
          <img onClick={(e) => this.handleClick(e)} name={books.id} src={books.cover} alt={books.title}/>              
          </div>
          <div className={this.state.showBook[books.id-1] ? "bookDetails" : "bookhidden"}>
            <br/>
            <div className="book-show">
            <div className="cover-book-show">
            <h5>{books.title}</h5>
            </div>
            <div className="author-book-show">
            <h6>{books.author}</h6>
            </div>
            <div className="summary-book-show">
            <p>{books.summary}</p>
            </div>
            </div>
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
          {/* <MySlider /> */}
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