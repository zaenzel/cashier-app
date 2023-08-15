import { useState } from "react";
import Layout from "../../global/Layout";
import CardFood from "./CardFood/CardFood";
import { addTrasaction, getFoods } from "../../../utils/api";
import Loading from "../../global/Loading/Loading";
import DefaultError from "../../global/Error/DefaultError";
import Cart from "./Cart/Cart";
import ModalSave from "./Modal/ModalSave";
import ModalCharge from "./Modal/ModalCharge/ModalCharge";

const Transaction = () => {
  const [cartList, cartListSet] = useState([]);

  const [bill, billSet] = useState({
    total_price: 0,
    total_cash: 0,
    total_change: 0,
    items: [],
  });

  const [modalSuccess, modalSuccessSet] = useState(false);
  const [modalBill, modalBillSet] = useState(false);

  const { foods, isLoading, isError } = getFoods();

  if (isLoading) return <Loading />;

  if (isError) return <DefaultError />;

  function handleAddToCart(food) {
    cartListSet((prev) => {
      const updatedCart = [...prev];
      const existingCartItem = updatedCart.find((item) => item.id === food.id);

      if (existingCartItem) {
        existingCartItem.quantity++;
        existingCartItem.total_price = existingCartItem.quantity * food?.price;
      } else {
        updatedCart.push({ ...food, quantity: 1, total_price: food?.price });
      }

      return updatedCart;
    });

    /*
    const findSameId = [...cartList].findIndex((i) => i?.id === food?.id);

    if (findSameId !== -1) {
      // if findSameId have some index
      return cartListSet((prev) => {
        let arr = [...prev];
        arr[findSameId].quantity += 1;
        arr[findSameId].total_price = arr[findSameId].quantity * food?.price
        return arr;
      });
    }

    // if findSameId havent some index return -1
    return cartListSet((prev) => [
      ...prev,
      {
        ...food,
        quantity: 1,
        total_price: food?.price
      },
    ]);
    */
  }

  async function handlePayIsComplete() {   
    try {
      const res = await addTrasaction(bill);
      if (res.status === 201) {
        modalBillSet(false);
        modalSuccessSet(true);
      }
      modalBillSet(false);
      modalSuccessSet(true);
      setTimeout(() => {
        modalSuccessSet(false);
      }, 2000);
      console.log(res)
    } catch (error) {
      console.log(error);
    }

    console.log(bill)
  }

  return (
    <Layout>
      {modalSuccess && <ModalSave />}

      {modalBill && (
        <ModalCharge
          foods={cartList}
          modalBillSet={modalBillSet}
          bill={bill}
          billSet={billSet}
          handlePayIsComplete={handlePayIsComplete}
        />
      )}

      <div className="flex gap-3">
        <div className="flex flex-wrap gap-5 basis-2/3">
          {foods?.data?.data.map((e, i) => {
            return (
              <CardFood
                food={e}
                key={i}
                cartListSet={cartListSet}
                onClickAddToCart={handleAddToCart}
              />
            );
          })}
        </div>
        <div className="basis-1/3">
          <Cart
            cartList={cartList}
            cartListSet={cartListSet}
            modalSuccessSet={modalSuccessSet}
            modalBillSet={modalBillSet}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Transaction;
