import './css/app.css'
import BookCard from "./components/BookCard.jsx";
import Footer from "./components/Footer.jsx";
import { books } from "./data/bookData.js";

function App() {
  return (
    <div>
      <h1>Books I Like</h1>
      {books.map((book) => (
        <BookCard key={book.id} title={book.title} author={book.author} content={book.content} bookArt={book.bookArt} />
      ))}
      <Footer />
    </div>
  );
}
export default App;