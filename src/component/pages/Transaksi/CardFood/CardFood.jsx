import React from "react";
import { rupiah } from "../../../../utils/helper";

const CardFood = ({ foods }) => {
  const { name, image, price } = foods;

  return (
    <div className="card w-72 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <p className="card-title flex justify-center">Shoes!</p>
        <p className="flex justify-center text-blue-400 font-medium">{rupiah(price)}</p>
      </div>
    </div>
  );
};

export default CardFood;
