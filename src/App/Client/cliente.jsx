import React from "react";
import "./client.css";
import Dados from "./dados";
import "./move.css";
import NavBar from "../../Global/navbar";

function Client() {
  return (
    <div className="cliente">
      <NavBar />
      <div className="image-burcao">
        <img
          src="https://www.pngall.com/wp-content/uploads/4/Hole-PNG-File-Download-Free.png"
          alt="buraco"
        />
      </div>
      <img
        src="https://www.pngall.com/wp-content/uploads/5/Real-Monster-PNG-Image.png"
        alt="imagem"
      />
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="card-all">
        <div className="card-container">
          <Dados />
        </div>
      </div>
    </div>
  );
}

export default Client;
