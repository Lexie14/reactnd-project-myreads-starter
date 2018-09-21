import React, { Component } from "react";
import * as BooksAPI from "../BooksAPI";
import "../App.css";
import Book from "./Book.js";
import { Link } from "react-router-dom";

class SearchBook extends Component {
  state = {
    query: "",
    booksFromSearch: []
  };

  updateQuery = query => {
    if (query.length > 0) {
      BooksAPI.search(query).then(books => {
        if (books instanceof Array) {
          books.map(book => (book.shelf = "none"));
          books.map(book =>
            this.props.books
              .filter(b => b.id === book.id)
              .map(b => (book.shelf = b.shelf))
          );
          this.setState({
            booksFromSearch: books
          });
        } else {
          this.setState({
            booksFromSearch: []
          });
        }
      });
    } else {
      this.setState({
        booksFromSearch: []
      });
    }
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/" />
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.booksFromSearch.map(book => (
              <Book
                key={book.id}
                book={book}
                changeShelf={this.props.changeShelf}
              />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBook;
