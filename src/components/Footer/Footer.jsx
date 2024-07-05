import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.ptag}>
        <p>Changelog</p>
        <p>Styles</p>
        <p>Licensing</p>
      </div>
      <div className={style.icons}>
        <button>
          <i class="fa-brands fa-facebook"></i>
        </button>
        <button>
          <i class="fa-brands fa-twitter"></i>
        </button>
        <button>
          <i class="fa-brands fa-instagram"></i>
        </button>
      </div>
      <div>
        <p>Powered by Webflow.com</p>
      </div>
    </div>
  );
};
export default Footer;
