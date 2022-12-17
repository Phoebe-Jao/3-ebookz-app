import React from "react";
import "./styles/Card.css";
import { AiFillStar } from "react-icons/ai";

function Card({ image, altText, rating, reviewCount, title, author }) {
  return (
    <div className="card">
      <img
        src={image}
        className="card--bookCover"
        alt={ altText }
      />
      <div className="card--bookDetails">
        <div className="card--bookRating">
          <AiFillStar className="card--star" />
          <p className="card--rating">{ rating }</p> 
          <p className="card--reviews">({ reviewCount })</p>
        </div>
        <p className="card--bookTitle">{ title }</p>
        <p className="card--bookAuthor"> {author }</p>
      </div>
    </div>
  );
}

export default Card;
