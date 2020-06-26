import React, { Component } from 'react'
import Filter from "./components/filter";
//import BookView from "./components/bookView";
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
      <div className="App">
        <h1>My library</h1>
        <div>
          <img className="banner" src="https://i.insider.com/5660556add0895131c8b47f0?width=1100&format=jpeg&auto=webp"/>
        </div>

        <div>
          <Filter filterBook={filteredList => this.filterBook(filteredList)}/>
        </div>
        <br></br>
        <br></br>
        
        <ul>
          <div className="all-books">
            {this.renderLibrary()}
          </div>
        </ul>
      </div>
    );
  }
}
