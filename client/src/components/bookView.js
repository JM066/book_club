import React from "react";
import "./bookView.css";



class BookView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books:[]
    };
  }

  componentDidMount() {
    this.getBookList();
  }

  getBookList = () => {
    fetch(`*/title`)
    .then(response => response.json())
    .then(response => {
      this.setState({books: response})
    })
  }


  render() {
    return (
      <div>
        <h1>My library</h1>
        <ul>
          {this.state.books.map((books,id) => {
            return(
              <li key={id}>
                <span onClick ={() => this.getBookList(books.id)}>
                  {books.title}
                </span>
              </li>
            );
          })};


        </ul>
      </div>
    );
  }
}

export default BookView;
