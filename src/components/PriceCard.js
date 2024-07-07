import React from "react";
import "./PriceCard.css";

const priceCard = ({ plan }) => {
  return (
    <div className="price-card">
      <h2>{plan.name}</h2>
      <h3>{plan.price}</h3>
      <ul>
        {plan.features.map((feature, index) => (
          <li key={index} className={feature.included ? "included" : "excluded"}>
            {feature.name}
          </li>
        ))}{" "}
        {/* The curly braces {} are used to embed JavaScript expressions inside JSX */}
      </ul>
      <button>Proceed</button>
    </div>
  );
};

export default priceCard;
