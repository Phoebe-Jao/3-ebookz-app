import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import booksData from "./data.js";

function App() {
  const books = booksData.map((book) => (
    <Card
      key={book.id}
      image={book.image}
      altText={book.altText}
      rating={book.rating}
      reviewCount={book.reviewCount}
      title={book.title}
      author={book.author}
    />
  ));

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="books">{books}</div>
    </div>
  );
}

export default App;
