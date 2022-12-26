import {useEffect, useState} from 'react';
import {search} from '../BooksAPI';
import Book from './Book';
import {useNavigate} from 'react-router-dom';

function SearchPage(props) {
  const navigate = useNavigate();
  const {shelvedBooks, fetchBooks} = props;
  const [searchResults, setSearchResults] = useState([]);
  const [resultsWithShelf, setResultsWithShelf] = useState([]);

  const addShelfToResult = () => {
    if (searchResults && shelvedBooks) {
      if (Array.isArray(searchResults)) {
        const result = searchResults.map(b => {
          const bookWithShelf = shelvedBooks.find(s => s.id === b.id);
          if (bookWithShelf) {
            b.shelf = bookWithShelf.shelf;
          }
          return b;
        });
        setResultsWithShelf(result);
      }
    }
  };
  const handleSearch = async (bookName) => {
    if (bookName) {
      const result = await search(bookName);
      if (!Array.isArray(searchResults)) {
        setResultsWithShelf([]);
      }
      setSearchResults(result);
    }
  };

  useEffect(() => {
    addShelfToResult();
  }, [searchResults, shelvedBooks]);

  return (
      <div className="search-books">
        <div className="search-books-bar">
          <button className="close-search"
                  onClick={() => navigate('/')}>Close
          </button>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input onChange={async (event) => handleSearch(event.target.value)}
                   type="text" placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {Array.isArray(resultsWithShelf) && resultsWithShelf.map(
                (book, index) => <Book fetchBooks={fetchBooks} key={index}
                                       book={book}/>)}
          </ol>
        </div>
      </div>
  );
}

export default SearchPage;
