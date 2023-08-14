import { VscAccount } from "react-icons/vsc";
import { rupiah } from "../../../../utils/helper";
import { useState } from "react";

const Cart = ({ cartList, modalSuccessSet, modalBillSet }) => {
  const [total, totalSet] = useState(0);

  const totalBil = cartList
    .map((e) => {
      return e.total_price;
    })
    .reduce((acc, cur) => {
     return acc + cur;
    }, 0);

  return (
    <div className="flex flex-col gap-5 bg-white p-5 rounded-sm shadow-md">
      <div className="flex items-center justify-center gap-5">
        <VscAccount className="text-2xl" />
        <p className="font-medium">Pesanan</p>
      </div>
      {cartList.map((e, i) => {
        return (
          <div className="flex items-center gap-5" key={i}>
            <img src={e.image} alt="" className="w-24 h-24 object-cover" />
            <p className="">{e.name}</p>
            <div className="flex gap-2">
              <p>x{e.quantity}</p>
              <p className="text-blue-400">{rupiah(e.total_price)}</p>
            </div>
          </div>
        );
      })}
      <div className="flex flex-col gap-3">
        <button className="btn btn-outline btn-error w-full">Clear Cart</button>
        <div className="flex gap-2">
          <button
            className="px-5 py-3 font-semibold text-white bg-green-600 rounded hover:opacity-90 w-full"
            onClick={() => {
              modalSuccessSet(true);
              setTimeout(() => {
                modalSuccessSet(false);
              }, 2000);
            }}
          >
            Save Bill
          </button>
          <button className="px-5 py-3 font-semibold text-white bg-green-600 rounded hover:opacity-90 w-full">
            Print Bill
          </button>
        </div>
        <button
          className="btn btn-info text-white"
          onClick={() => modalBillSet(true)}
        >
          Charge <span>Rp. 40.000</span>
        </button>
      </div>
    </div>
  );
};

export default Cart;
