import React, { Component } from 'react'
import Filter from "./components/filter"
import Carousel from "./components/carousel"

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

//import Overlay from "./components/overlay"
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books:[]
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

  renderLibrary() {
  return this.state.books.map((books,id) => {
    return(
      <li key={id} className="book-list">
        <span onClick ={() => this.getBookclub(books.id)}>
          <div className="book-cover-container">
          <img src={books.cover} alt={books.title} className="book-cover"/>                    
          </div>
          <h4>{books.title}</h4>
          <p>{books.author}</p>
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

        <Carousel />


        {/* <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="" alt="First slide"/>
        <div class="carousel-caption d-none d-md-block">
          <h5>title</h5>
          <p>summary</p>
        </div>
        </div>

        <div class="carousel-item">
          <img class="d-block w-100" src="" alt="Second slide"/>
        <div class="carousel-caption d-none d-md-block">
          <h5>title</h5>
          <p>summary</p>
        </div>
        </div>
    
        <div class="carousel-item">
          <img class="d-block w-100" src="" alt="Third slide"/>
        <div class="carousel-caption d-none d-md-block">
          <h5>title</h5>
        <p>summary</p>
        </div>
        </div>

        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>

        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>

        </div>
        </div> */}







        <div>
          <Filter filterBook={filteredList => this.filterBook(filteredList)}/>
          {/* <Overlay /> */}
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
