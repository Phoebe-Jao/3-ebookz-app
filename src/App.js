import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="books">
        <Card 
          image="../images/book1.jpg"
          altText="Ebook cover illustration for the book 'Harry Potter and the Sorcerer's Stone, Book 1' by author J.K. Rowling"
          rating={4.9}
          reviewCount="180k"
          title="Harry Potter and the Sorcerer's Stone, Book 1"
          author="J.K. Rowling"
        />
        <Card 
          image="../images/book2.jpg"
          altText="Ebook cover illustration for the book 'Atomic Habits' by author James Clear"
          rating={4.8}
          reviewCount="120k"
          title="Atomic Habits"
          author="James Clear"
        />
        <Card 
          image="../images/book3.jpg"
          altText="Ebook cover illustration for the book 'He Who Fights with Monsters 8' by author Travis Deverell"
          rating={4.8}
          reviewCount="2k"
          title="He Who Fights with Monsters 8"
          author="Travis Deverell"
        />
        <Card 
          image="../images/book4.jpg"
          altText="Ebook cover illustration for the book 'A Christmas Carol' by author Charles Dickens"
          rating={4.9}
          reviewCount="3k"
          title="A Christmas Carol"
          author="Charles Dickens"
        />
        <Card 
          image="../images/book5.jpg"
          altText="Ebook cover illustration for the book 'A Killer&apos;s Wife' by author Victor Methos"
          rating={4.6}
          reviewCount="10k"
          title="A Killer's Wife"
          author="Victor Methos"
        />
      </div>
    </div>
  );
}

export default App;
