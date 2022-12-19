import React from "react";
import "./styles/Card.css";
import { AiFillStar } from "react-icons/ai";

const numFormatter = function (num) {
  if (num > 999 && num < 1000000) {
    return (num / 1000).toFixed(1) + "K";
  } else {
    return num;
  }
};

function Card({ image, altText, rating, reviewCount, title, author }) {
  return (
    <div className="card">
      {reviewCount >= 10000 && <p className="card--badge">HOT</p>}
      <img src={image} className="card--bookCover" alt={altText} />
      <div className="card--bookDetails">
        <div className="card--bookRating">
          <AiFillStar className="card--star" />
          <p className="card--rating">{rating}</p>
          <p className="card--reviews">({numFormatter(reviewCount)})</p>
        </div>
        <p className="card--bookTitle">{title}</p>
        <p className="card--bookAuthor"> {author}</p>
      </div>
    </div>
  );
}

export default Card;
