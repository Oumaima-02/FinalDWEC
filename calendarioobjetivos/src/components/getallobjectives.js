import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const GetList = () => {
  const [items, setItems] = useState([
    JSON.parse(localStorage.getItem("objective"))
  ]);

  items.forEach((name) => {
    //console.log(name);
  });

  return (
    <div>
      <h1>All Objectives</h1>
      <ul>
        {items.map((elemento) => (
          <li key={elemento.start}>
            {elemento.start}
            <Link to={`/show-objective/2`}>
              <button> Details </button>
            </Link>
          </li>
        ))}
      </ul>

      <Link to={`/new-objective`}>
        <button>New objective </button>
      </Link>
    </div>
  );
};
export default GetList;
