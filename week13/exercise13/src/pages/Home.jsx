import { books } from '../data/bookData.js';
import BookCard from '../components/BookCard.jsx';

function Home() {
  return (
    <div className='page-grid'>
    <div className='book-grid'>
      {books.map((book) => (
        <BookCard 
        key={book.id} 
        title={book.title} 
        author={book.author} 
        content={book.content} 
        bookArt={book.bookArt} />
      ))}
    </div>
    </div>
  );
}

export default Home;