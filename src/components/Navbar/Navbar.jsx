import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.icon}>
        <img
          src="https://assets.website-files.com/5f36828308ea3b14a0500991/5f36828308ea3bc72f500a01_webclip.png"
          alt="icon"
        />
        <span>Yogart</span>
      </div>
      <div className={style.links}>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/classes">CLASSES</Link>
        <Link to="/trainer">TRAINERS</Link>
        <Link to="/price">PRICING</Link>
      </div>
      <div className={style.butons}>
        <button className={style.buton1}>Contact Us</button>
        <button className={style.buton2}>
          <i class="fa-solid fa-cart-shopping"></i>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
