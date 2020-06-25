import React from "react";
import "./addView.css";



class AddView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      year: "",
      country: "",
      summary: "",
      genre: "",
      cover:""
    };
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    }); 
  }


  handleSubmit() {
    this.props.addBook(
      {
       title: this.state.title,
       author: this.state.author,
       year: this.state.year,
       country: this.state.country,
       summary: this.state.summary,
       genre: this.state.genre,
       cover: this.state.covert
      });
  }


  render() {
    return (
      <div>
      <div className="addView-main-div">
      <h3>Add new book to my library</h3>
        <div className="new-book-form">
          <form>

            <label>Title
            <input type="text" name="title" onChange={e => this.handleInputChange(e)}/>
            </label>

            <br></br>
            <br></br>

            <label>Author
            <input type="text" name="author" onChange={e => this.handleInputChange(e)}/>
            </label>

            <br></br>
            <br></br>

            <label>Year
            <input type="text" name="year" onChange={e => this.handleInputChange(e)}/>
            </label>

            <br></br>
            <br></br>

            <label>Country
            <input type="text" name="country" onChange={e => this.handleInputChange(e)}/>
            </label>

            <br></br>
            <br></br>

            <label>Summary
            <textarea name="summary" onChange={e => this.handleInputChange(e)}/>
            </label>

            <br></br>
            <br></br>

            <label>Genre
            <input type="text" name="genre" onChange={e => this.handleInputChange(e)}/>
            </label>

            <br></br>
            <br></br>

          </form>
          <button className="new-book-submit" onClick={() => this.handleSubmit()}>Add New Book</button>
        </div>
      </div>
      </div>
    );
  }
}

export default AddView;
