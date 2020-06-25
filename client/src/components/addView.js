import React from "react";
import "./addView.css";



class AddView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
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
          <button className="new-book-submit" onClick={() => this.handleSubmit()}>Submit</button>
        </div>
      </div>
      </div>
    );
  }
}

export default AddView;
