import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="custom-card">
      <h2 className="card-title">🌟 Welcome!</h2>
      <p className="card-content">
        Helloo people! This is a simple theme switcher app built with React.
      </p>
      <p className="card-content">
         Toggle the theme to see the magic ✨ 
      </p>
    </div>
  );
};

export default Card;


