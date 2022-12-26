import Book from './Book';

function BookShelves(props) {
  const {bookShelves: books, fetchBooks} = props;

  return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books[0] && books[0].map((book, index) =>
                <Book fetchBooks={fetchBooks} shelvedBook key={index} book={book}/>,
            )}
          </ol>
        </div>
        <h2 className="bookshelf-title">Want to Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books[1] && books[1].map((book, index) =>
                <Book fetchBooks={fetchBooks} shelvedBook key={index} book={book}/>,
            )}
          </ol>
        </div>
        <h2 className="bookshelf-title">Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books[2] && books[2].map((book, index) =>
                <Book fetchBooks={fetchBooks} shelvedBook key={index} book={book}/>,
            )}
          </ol>
        </div>
      </div>
  );
}

export default BookShelves;
