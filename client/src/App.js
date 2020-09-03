import React, { Component } from 'react'
import Filter from "./components/filter"
import MySlider from "./components/myslider"
import './App.css';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import Maps from "./components/Maps"
const opencage = require('opencage-api-client');
const OCD_API_KEY = "de9bbf86a9fe4e93b5763f9ebc37e0f3"
// process.env.REACT_APP_OCD_API_KEY;


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books:[],
      showBook: [],
      showPopup: false,
      markers: []
    };
  }

  componentDidMount() {
    console.log("arrive this?");
    this.getBookclub()
  }

  getBookclub = () => {
    fetch(`/books`)
      .then(response => response.json())
      .then(response => {
        this.setState({ books: response });
        for(let i = 0; i < this.state.books.length; i++) {
          console.log(this.state.books[i])
         this.addLocation(this.state.books[i]);
        }
      });   
  }
  
  addLocation = (book) => {
      opencage.geocode({ key: OCD_API_KEY, q: book.location })
      .then(data => {
      console.log(data);
      if (data.results.length > 0){
        console.log("Found: " + data.results[0].formatted);
        // const formatted = data.results[0].formatted;
        const latlng = data.results[0].geometry;
        const {markers} = this.state
          let markerObject = { 
            location: latlng,
            name: book.title
          };
          markers.push(markerObject);
          this.setState({
            markers: markers
          })
          console.log(this.state.markers); 
        let mapInst =  this.refs.map.leafletElement;
        mapInst.flyTo(latlng, 12);
    } else alert("No results found!!");
    })  
    .catch(error => {
      console.log('error', error.message);
    })
  }

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
      this.setState(
        {books: filteredList,
         markers: []
        }, function() {
          for(let i = 0; i < this.state.books.length; i++) {
            this.addLocation(this.state.books[i]);
           }
        }
      )
      console.log(this.state.markers)
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
          <Filter filterBook={filteredList => this.filterBook(filteredList)} addLocation={book => this.addLocation(book)}/>
        </div>
        <br/>
        <ul>
          <div className="all-books">
            {this.renderLibrary()}
          </div>
        </ul>
          <Maps bookList={this.state.markers}/>
        </div>
    );
  }
}