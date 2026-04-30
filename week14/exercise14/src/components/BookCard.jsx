import {useState} from "react";

function BookCard({ title, author, bookArt, content }) {
  const [showDescription, setShowDescription] = useState(false);

    return (
        <div className="book-card">
            <h2 className="book-title">{title}</h2>
            <p className="book-author">{author}</p>

            <img
                src={bookArt}
                className="book-image"
            />

            {showDescription && (
                <p className="book-description">{content}</p>
            )}

            <button
                className="book-button"
                onClick={() => setShowDescription(!showDescription)}
            >
                {showDescription ? "Hide Description" : "Book Description"}
            </button>
        </div>
    );
}
export default BookCard;