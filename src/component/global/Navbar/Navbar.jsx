import { IoFastFoodOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-blue-400">
        <a className="btn btn-ghost normal-case text-2xl text-white px-20">
          <IoFastFoodOutline />
          <p>Alan Resto</p>
        </a>
      </div>
      <div className="flex gap-10 px-24 shadow-md">
        <Link to={"/"}>
          <button className="p-3 w-32 focus:border-b-4 focus:border-b-blue-400 border-b-4 border-b-transparent transition-all focus:text-blue-400">
            Food
          </button>
        </Link>
        <Link to={"/transaction"}>
          <button className="p-3 w-32 focus:border-b-4 focus:border-b-blue-400 border-b-4 border-b-transparent transition-all focus:text-blue-400">
            Transaksi
          </button>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
