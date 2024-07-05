import React from "react";
import style from "./AboutCom.module.css";
const AboutCom = () => {
  return (
    <div className={style.all}>
      <div className={style.about}>
        <div className={style.container}>
          <button>
            <i class="fa-solid fa-info"></i>
          </button>
          <h3>WHO WE ARE</h3>
          <h1>Inhale The Future, Exhale The Past</h1>
          <p>
            Duis faucibus ex in vehicula dapibus. Integer imperdiet aliquet
            finibus. Nullam scelerisque, mi eget sollicitudinuste tristique,
            massa nunc pellentesque mauris, eget bibendum magna nisl nec lorem.
          </p>
          <button className={style.last}>Read More</button>
        </div>
        <div className={style.image}>
          <img
            src="https://assets.website-files.com/5f36828308ea3b14a0500991/5f36828308ea3b8198500a22_about-bg.jpg"
            alt=""
          />
        </div>
        <div className={style.container2}>
          <button>
            <i class="fa-regular fa-face-grin-wide"></i>
          </button>
          <h3>WHY CHOOSE US</h3>
          <h1>It's About Being Good To Yourself</h1>
          <p>
            Duis faucibus ex in vehicula dapibus. Integer imperdiet aliquet
            finibus. Nullam scelerisque, mi eget sollicitudinuste tristique,
            massa nunc pellentesque mauris, eget bibendum magna nisl nec lorem.
          </p>
          <button className={style.last}>Start Today</button>
        </div>
      </div>
    </div>
  );
};

export default AboutCom;
