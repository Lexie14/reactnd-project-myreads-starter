import React, {Component} from 'react'
import Book from './Book'

class BookShelf extends Component {

  render() {
    // const { books } = this.props
    // let showingBooks 
    // showingBooks = books
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.filter((book) => book.shelf === `${this.props.shelf}`).map((book) => (
             <Book key={book.id} book={book}/>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}
                      

export default BookShelf
