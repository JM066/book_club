import React from 'react';
import AddView from "./components/addView";
import BookView from "./components/bookView";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addView: true, 
    };
  }

  changeUser(isAdmin) {
    this.setState({ addView: isAdmin });
  }

  addBook(newBook) {
    this.setState({
      books: [...this.state.books, newBook]
    });
  }


  render() {
    return (
      <div>
      <div className="app-main-div">
        <div className="nav-button">
          <button onClick={() => this.changeUser(true)} 
          className={this.state.addView ? "nav-button-clicked" : "nav-button-unclicked"}>
          Add New Book
          </button>
          <button onClick={() => this.changeUser(false)} 
          className={!this.state.addView ? "nav-button-clicked" : "nav-button-unclicked"}>
          My Library
          </button>

        </div>

        {this.state.addView ?
        <AddView addBook={newBook => this.addBook(newBook)} /> :
        <BookView books = {this.state.books}/>}

      </div>
      </div>
    );
  }
}

export default App;
