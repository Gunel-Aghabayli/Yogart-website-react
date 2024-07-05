import React from "react";
import style from "./Main.module.css";

const Main = () => {
  return (
    <div>
      <div className={style.main}>
        <div className={style.content}>
          <h5>FLEXING SINCE 2020</h5>
          <h1>In Truth, Yoga Doesn’t Take Time – It Gives Time</h1>
          <div className={style.buttons}>
            <button className={style.buton1}>Free Pass</button>
            <button className={style.buton2}>Explore</button>
          </div>
        </div>
      </div>
      <div className={style.register}>
        <h1>Get A Free Pass</h1>
        <div className={style.inputs}>
          <input placeholder="First name"></input>
          <input placeholder="Last name"></input>
          <input placeholder="Email"></input>
          <input placeholder="Phone"></input>
          <input placeholder="Gender"></input>
          <input placeholder="Age"></input>
        </div>
        <button>Get A Free Pass</button>
      </div>
    </div>
  );
};

export default Main;
