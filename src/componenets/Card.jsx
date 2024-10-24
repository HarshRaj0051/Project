import React from "react";
import "./Card.css";
import CData from "./CData";
const Card = () => {
  return (
    <>
      <div className="card-section">
        <div className="top">
          <h1>How We Work</h1>
          <h4>
            <span className="rose-text">We have kept our Work flow flexible, but that never deter us from
            our vision</span>.
          </h4>
        </div>

        <div className="bottom">
          <div className="card-area">
            <ul>
              {CData.map((elem) => {
                const { id, image, heading, description } = elem;
                return (
                  <>
                    <li key={id}>
                      <div className="image">
                        <img src={image} alt="" />
                      </div>
                      <h4>{heading}</h4>
                      <div className="para">
                        <p>{description}</p>
                      </div>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
