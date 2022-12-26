import './App.css';
import SearchPage from './components/SearchPage';
import MyReads from './components/MyReads';
import {
  BrowserRouter,
  Route, Routes,
} from 'react-router-dom';
import {useState} from 'react';
import {getAll} from './BooksAPI';

function App() {
  const [books, setBooks] = useState([]);
  const fetchBooks = async () => {
    const result = await getAll();
    setBooks(result);
  };

  return (
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route path="/"
                   element={<MyReads fetchBooks={fetchBooks} books={books}/>}/>
            <Route path="search"
                   element={<SearchPage fetchBooks={fetchBooks} shelvedBooks={books}/>}/>
            <Route/>
          </Routes>
        </div>
      </BrowserRouter>

  )
      ;
}

export default App;
