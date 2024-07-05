import React from "react";
import style from "./Price.module.css";
const Price = () => {
  return (
    <div className={style.price}>
      <div className={style.container}>
        <div className={style.basic}>
          <h1>BASIC</h1>
          <h4>$25.00 USD</h4>
        </div>
        <p>Nunc a turpis blandit Sed eleifend risus nec</p>
        <h6>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae est
          pulvinar, commodo eros vitae.
        </h6>
        <button>Add To Cart</button>
      </div>
      <div className={style.container}>
        <div className={style.basic}>
          <h1>STANDART</h1>
          <h4>$50.00 USD</h4>
        </div>
        <p>Nunc a turpis blandit
        Sed eleifend risus nec
        Praesent non turpis</p>
        <h6>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae est
          pulvinar, commodo eros vitae.
        </h6>
        <button>Add To Cart</button>
      </div>
      <div className={style.container2}>
        <div className={style.basic2}>
          <h1>PREMIUM</h1>
          <h4>$25.00 USD</h4>
        </div>
        <p>Nunc a turpis blandit Sed eleifend risus nec</p>
        <h6>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae est
          pulvinar, commodo eros vitae.
        </h6>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};

export default Price;
