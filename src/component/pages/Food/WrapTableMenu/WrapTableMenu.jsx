import { AiOutlinePlus } from "react-icons/ai";
import { rupiah } from "../../../../utils/helper";
import TableMenu from "../../../global/TableMenu/TableMenu";

const WrapTableMenu = ({ addFormSet, foods }) => {

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
       <TableMenu foods={foods?.data} />
      </div>
    </div>
  );
};

export default WrapTableMenu;
