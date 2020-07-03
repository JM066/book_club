import React, { Component } from 'react'
import Filter from "./components/filter"
import MySlider from "./components/myslider"
// import Modal from "./components/modal"
import './App.css';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import Maps from "./components/Maps"
// const opencage = require('opencage-api-client');


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books:[],
      showBook: [],
      showPopup: false
      
      // lat: 40.4366009,
      // lon: -4.2400222,
      // zoom: 5
    };
  }

  componentDidMount() {
    this.getBookclub();
  }

  getBookclub = () => {
    fetch(`/books`)
      .then(response => response.json())
      .then(response => {
        console.log(response)
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

  togglePopup() {  
    this.setState({  
         showPopup: !this.state.showPopup  
    });  
     }  

  filterBook = (filteredList) =>{
      this.setState({
        books: filteredList
      })
    }
  renderLibrary = () => {
  return this.state.books.map((books,id) => {
    return(
      <li key={id} className="book-list">
          <br/>
          <div>
          <img onClick={(e) => this.handleClick(e)} name={books.id} src={books.cover} alt={books.title} className="book-cover"/>              
          </div>
          <div className={this.state.showBook[books.id-1] ? "bookDetails" : "bookhidden"}>
            <br/>
            <div className="book-show">
            <div className="book-show-inner">
            <div className="cover-book-show">
            <h3>{books.title}</h3>
            </div>
            <div className="author-book-show">
            <h6>{books.author}</h6>
            </div>
            <div className="summary-book-show">
            <p>{books.summary}</p>
            </div>
            <div className="cover-book-show">
            <img src={books.cover} alt={books.title} width="150" height="200" />
            </div>
            <br/><br/><br/>
            <button onClick={this.state.closePopup}> x </button>  
            </div>
            </div>
          </div>
      </li>
    )
  })}
  

  
  render() {
    return (
      <div>
        <h1>London Book Club</h1>
        <div className="App-header">
          <br/>
          <MySlider />
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
        <Maps bookList={this.state.books}  />
      </div>
    );
  }
}