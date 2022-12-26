import {useEffect, useState} from 'react';
import BookShelves from './BookShelves';
import {useNavigate} from 'react-router-dom';

function MyReads(props) {
  const {books, fetchBooks} = props;
  const navigate = useNavigate();
  const [bookShelves, setBookShelves] = useState([]);

  const groupBooksByShelves = (books) => {
    const result = [];
    let shelves = 0;
    books.forEach((book, index) => {
      if (index === 0) {
        result.push([book]);
      } else if (book.shelf === books[index - 1].shelf) {
        result[shelves].push(book);
      } else {
        shelves++;
        result.push([book]);
      }
    });
    setBookShelves(result);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  useEffect(() => {
    groupBooksByShelves(books);
  }, [books]);

  return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelves fetchBooks={fetchBooks} shelvedBooks={books}
                         bookShelves={bookShelves}/>
          </div>
        </div>
        <div className="open-search">
          <button
              onClick={() => navigate('/search')}>Add a book
          </button>
        </div>
      </div>
  );
}

export default MyReads;
