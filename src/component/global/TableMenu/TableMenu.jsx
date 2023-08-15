import React from "react";
import { rupiah } from "../../../utils/helper";

const TableMenu = ({ foods }) => {
  const TABLE_HEAD = ["#", "Nama", "Foto", "Harga"];

  return (
    <table className="w-full min-w-max table-auto text-left">
      <thead>
        <tr>
          {TABLE_HEAD.map((e, i) => {
            return (
              <th
                key={i}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 bg-gray-100"
              >
                {e}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {foods.map((e, i) => {
          const even = i % 2;
          const classes = even ? "p-4" : "p-4 bg-gray-50";
          return (
            <tr key={e.id}>
              <td className={classes}>
                <p>{i + 1}</p>
              </td>
              <td className={classes}>
                <p>{e.name}</p>
              </td>
              {e.quantity && (
                <td className={classes}>
                  <p>x{e.quantity}</p>
                </td>
              )}
              <td className={classes}>
                <img
                  src={e.image}
                  alt="foto produk"
                  className="w-24 h-24 object-cover"
                />
              </td>
              <td className={classes}>
                {e.total_price ? (
                  <p>{rupiah(e.total_price)}</p>
                ) : (
                  <p>{rupiah(e.price)}</p>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableMenu;
