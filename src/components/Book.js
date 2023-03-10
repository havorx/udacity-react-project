import {update} from '../BooksAPI';

function Book(props) {
  const {book, fetchBooks} = props;

  const handleChangeShelf = async (shelf) => {
    await update(book, shelf);
    fetchBooks();
  };

  return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks?.smallThumbnail})`,
            }}>
            </div>

            <div className="book-shelf-changer">
              <select value={book.shelf ? book.shelf : 'none'}
                      onChange={(event) =>
                          handleChangeShelf(event.target.value)}>
                <option value="move" disabled>Move to...
                </option>
                <option value="currentlyReading">Currently
                  Reading
                </option>
                <option value="wantToRead">Want to Read
                </option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>

          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors?.map(
              (author, index, array) => {
                if (index !== array.length - 1)
                  return `${author}, `;
                else return `${author}`;
              })}</div>
        </div>
      </li>
  );
}

export default Book;
