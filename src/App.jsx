import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Food from "./component/pages/Food/Food";
import Transaction from "./component/pages/Transaksi/Transaction";
import FormAddFood from "./component/pages/Food/FormAddFood/FormAddFood";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Food />,
  },
  {
    path: "transaction",
    element: <Transaction />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
