import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import BookShelf from "./components/BookShelf";
import SearchBook from "./components/SearchBook";

class BooksApp extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({
        books
      });
    });
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then(books => {
        this.setState({
          books
        });
      });
    });
  };

  render() {
    const { books } = this.state;
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1> MyReads </h1>
              </div>
              <div className="list-books-content">
                <div>
                  <BookShelf
                    shelf="currentlyReading"
                    title="Currently Reading"
                    books={books}
                    changeShelf={this.changeShelf}
                  />
                  <BookShelf
                    shelf="wantToRead"
                    title="Want to Read"
                    books={books}
                    changeShelf={this.changeShelf}
                  />
                  <BookShelf
                    shelf="read"
                    title="Read"
                    books={books}
                    changeShelf={this.changeShelf}
                  />
                </div>
              </div>
              <div className="open-search">
                <Link to="/search"> </Link>
              </div>
            </div>
          )}
        />
        <Route
          path="/search"
          render={({ history }) => (
            <div>
              <SearchBook books={books} changeShelf={this.changeShelf} />
            </div>
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
