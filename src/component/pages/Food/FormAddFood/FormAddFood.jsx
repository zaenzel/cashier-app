import React, { useState } from "react";
import FileInput from "./FileInput";
import { addFood } from "../../../../utils/api";

const FormAddFood = ({ addFormSet }) => {
  const [menu, menuSet] = useState({
    name: "",
    image: [],
    price: "",
  });

  //   const addForm = () => {
  //   }

  //   console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", menu.name);
    formData.append("price", menu.price);
    menu.image.forEach((file) => {
      formData.append("image", file);
    });

    try {
      const res = await addFood(formData);
      if (res.status === 201) { 
        addFormSet(false);
      }
    } catch (error) {
      console.log(error?.response?.data);
    }
  };

  return (
    <div className="py-10 px-5 bg-white flex flex-col gap-5">
      <h5 className="text-blue-400 text-lg font-semibold">Tambahkan Menu</h5>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Nama Menu</label>
          <input
            className="border-2 p-3 focus:outline-blue-400"
            type="text"
            name="name"
            id="name"
            onChange={(e) =>
              menuSet((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>Foto Menu</p>
          <FileInput menuSet={menuSet} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="price">Harga Menu</label>
          <div className="flex">
            <div className="bg-blue-400 flex items-center px-5 rounded-l-md">
              <p className="text-white">Rp.</p>
            </div>
            <input
              className="border-2 p-3 w-full focus:outline-blue-400"
              type="number"
              name="name"
              id="name"
              onChange={(e) =>
                menuSet((prev) => ({ ...prev, price: e.target.value }))
              }
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-green-600 px-10 py-3 text-white font-semibold hover:opacity-90 self-end rounded-md"
        >
          Simpan
        </button>
      </form>
    </div>
  );
};

export default FormAddFood;
