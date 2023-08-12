import { AiOutlinePlus } from "react-icons/ai";
import { rupiah } from "../../../../utils/helper";

const TableMenu = ({ addFormSet, foods }) => {
    
  const TABLE_HEAD = ["#", "Nama", "Foto", "Harga"];

  return (
    <div className="flex flex-col gap-5">
      <p>Tambahkan menu makanan yang ada diresto</p>

      <div className="flex flex-col gap-5 p-5 bg-white">
        <button
          className="flex px-5 py-3 w-fit justify-center items-center gap-5 bg-blue-400 rounded-md text-white font-semibold hover:bg-blue-600 transition-colors"
          onClick={(e) => addFormSet(true)}
        >
          <AiOutlinePlus />
          Tambah Menu
        </button>
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
            {foods?.data.map((e, i) => {
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
                  <td className={classes}>
                    <img src={e.image} alt="foto produk" className="w-24" />
                  </td>
                  <td className={classes}>
                    <p>{rupiah(e.price)}</p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableMenu;
