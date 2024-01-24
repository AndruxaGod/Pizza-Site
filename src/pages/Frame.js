import React from "react";
import "./Frame.css";
import { Link } from "react-router-dom"; // Импортируем Link из react-router-dom

const Frame = () => {
  return (
    <div className="div">
      <img className="icon" alt="" src="/@2x.png" />
      <img className="icon1" alt="" src="/1@2x.png" />
      
      <input type="text" className="e-mail" placeholder="E-mail" />
      <input type="password" className="b" placeholder="Пароль" />
      
      <div className="div1">
      </div>
      <div className="item" />
      <div className="child" />

      <b className="b1">Авторизація</b>
      <div className="div2">
        <div className="div3" />
        <button className="b2">Продовжити</button>
      </div>
      <div className="div4">
        <div className="div3" />
        <button className="b2">Постачальник</button>
      </div>
      <div className="div6">
        <div className="div3" />
        <Link to="/Frame2"></Link>
        <button className="b2">Клієнт</button>
      </div>
    </div>
  );
};

export default Frame;
