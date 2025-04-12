import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../items/thiophanate-methyl-70-wp.jpg"
import diseaseSolutions from "./plant_solution_items";

function Items() {
  return (
    <div className="card-container d-flex flex-wrap gap-3">
        {diseaseSolutions.map((solution, index) => (
            <div key={index} className="card" style={{ width: "18rem",borderRadius:"10px"}}>
                <img src={solution.img} className="card-img-top" alt={solution.title} />
                <div className="card-body">
                    <h5 className="card-title">{solution.title}</h5>
                    <p className="card-text">{solution.description}</p>
                    <a href={solution.link} className="btn btn-primary" target="_blank">Click Here</a>
                </div>
            </div>
        ))}
    </div>
);
  }

export default Items;
