import React from "react";
import { specialMenus } from "../../assets/constants/listMenu";
import "../../assets/styles/Specials.css";
import { useNavigate } from "react-router-dom";

function Specials() {
  const navigate = useNavigate();
  return (
    <section className="specials">
      <div className="specials-header">
        <h2>Specials</h2>
        <button className="btn-primary small">Online Menu</button>
      </div>

      <div className="specials-grid">
        {specialMenus.map((item, index) => (
          <div key={index} className="card">
            <img className="card-image" src={item.image} alt={item.name} />
            <div className="card-body">
              <div className="card-title">
                <h3>{item.name}</h3>
                <span className="price">{item.price}</span>
              </div>
              <p>{item.desc}</p>
              <button
                onClick={() => navigate("/order-online")}
                className="btn-link"
              >
                Order a delivery ➤
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Specials;
