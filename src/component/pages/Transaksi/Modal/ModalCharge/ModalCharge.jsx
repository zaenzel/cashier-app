import React, { useState } from "react";
import TableMenu from "../../../../global/TableMenu/TableMenu";
import { rupiah } from "../../../../../utils/helper";

const ModalCharge = ({
  foods,
  modalBillSet,
  billSet,
  bill,
  handlePayIsComplete,
}) => {
  const handleCash = (e) => {
    const { name, value } = e.target;
    const newValue = parseFloat(value);
    billSet((prev) => ({ ...prev, [name]: newValue }));
  };
  
  async function handlePayIsComplete() {
    
    // modalBillSet(!bill);
    console.log("first")
    
    // try {
    //   const res = await addTrasaction(bill);
    //   if (res.status === 201) {
    //     modalBillSet(false);
    //     modalSuccessSet(true);
    //   }
    //   modalBillSet(false);
    //   modalSuccessSet(true);
    //   setTimeout(() => {
    //     modalSuccessSet(false);
    //   }, 2000);
    // } catch (error) {
    //   console.log(error);
    // }
  }

  const handleToPay = () => {
    const total_price = foods.reduce((a, b) => a + b?.total_price, 0);
    const total_change = bill.total_cash - total_price;
    const items = foods.map((e) => {
      return {
        food_id: e.id,
        quantity: e.quantity,
        price: e.price,
        subtotal: e.total_price,
      };
    });

    billSet((prev) => ({ ...prev, total_price, total_change, items }));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-black bg-opacity-50 absolute inset-0" />

      <div className="flex flex-col gap-5 bg-white py-10 px-20 z-10">
        <h1 className="text-2xl">Detail Pesanan</h1>
        <div className="flex gap-10">
          <TableMenu foods={foods} />
          <div className="flex flex-col gap-5">
            <h5 className="text-center">Uang Pembeli (Rp) {}</h5>
            <input
              type="number"
              className="px-5 py-3 border focus:outline-blue-400 rounded-md"
              name="total_cash"
              onChange={(e) => handleCash(e)}
            />
            <div className="flex gap-2">
              <button
                className="px-5 py-2 rounded border border-gray-500 text-gray-500 w-full hover:bg-red-400 hover:text-white hover:border-red-400"
                onClick={() => modalBillSet(false)}
              >
                close
              </button>
              <button
                className="px-5 py-2 rounded  bg-blue-400 text-white w-full hover:bg-blue-600"
                onClick={handleToPay}
              >
                Pay!
              </button>
            </div>
            <div>
              <p className="text-red-400">
                Kembalian : {rupiah(bill.total_change)}
              </p>
            </div>
            {bill.total_change >= 0 ? (
              <button
                className="btn btn-success text-white"
                onClick={handlePayIsComplete}
              >
                Oke
              </button>
            ) : (
              <p className="text-red-400">
                Uang pembeli tidak cukup untuk membayar
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCharge;
