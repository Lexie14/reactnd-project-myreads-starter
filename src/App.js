import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './components/BookShelf'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
             <BookShelf shelf='currentlyReading' books={this.state.books}/>
             <BookShelf shelf='wantToRead' books={this.state.books}/>
             <BookShelf shelf='read' books={this.state.books}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BooksApp
