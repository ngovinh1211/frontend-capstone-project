import React from "react";
import Foodcard from "./Foodcard";

const Menu = () => {
  const handleOrder = (id) => {};
  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>This weeks specials!</h2>
        <button>Online Menu</button>
      </div>
      <div className="cards">
        {Foodcard.map((Foodcard) => (
          <div key={Foodcard.id} className="menu-items">
            <img src={Foodcard.image} alt="" />
            <div className="menu-content">
              <div className="heading">
                <h5>{Foodcard.title}</h5>
                <p>${Foodcard.price}</p>
              </div>
              <p>{Foodcard.description}</p>
              <button
                className="orderbtn"
                onClick={() => handleOrder(Foodcard.id)}
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
