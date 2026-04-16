function BookCard({ title, author, bookArt, content }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>by {author}</p>
      <img src={bookArt}/>
      <p>{content}</p>
    </div>
  );
}
export default BookCard;