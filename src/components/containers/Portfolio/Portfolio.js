import React, { useState } from "react";
import "./Portfolio.scss";
const Portfolio = () => {
  const [active_a, setActive_a] = useState(1);
  return (
    <div className="portfolio_container">
      <div className="portfolio_container-header">
        <p>My Works</p>
        <h3>Awesome Projects</h3>
      </div>
      <div className="portfolio_container-buttons">
        <Button
          id={1}
          buttonName="All"
          active_a={active_a}
          setActive_a={setActive_a}
        />
      </div>
      <div className="portfolio_container-body">
        <div className="single_work"></div>
      </div>
    </div>
  );
};
const Button = ({ id, buttonName, active_a, setActive_a }) => {
  return (
    <div
      className={active_a === id ? "buttona active" : "buttona inactive"}
      onClick={() => setActive_a({ id })}
    >
      <div>
        <p>{buttonName}</p>
      </div>
    </div>
  );
};
export default Portfolio;
