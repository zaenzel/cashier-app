'use strict'

import { rupiah } from "../../../../utils/helper";

const CardFood = ({ food, onClickAddToCart }) => {
  const { name, image, price } = food;

  return (
    <div
      className="card w-60 bg-base-100 shadow-xl cursor-pointer"
      onClick={() => onClickAddToCart(food)}
    >
      <figure>
        <img src={image} alt="food" className="h-52 w-full object-cover" />
      </figure>
      <div className="card-body">
        <p className="card-title flex justify-center text-center">{name}</p>
        <p className="flex justify-center text-blue-400 font-medium">
          {rupiah(price)}
        </p>
      </div>
    </div>
  );
};

export default CardFood;
