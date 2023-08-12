import React, { useState } from "react";
import Layout from "../../global/Layout";
import TableMenu from "./TableMenu/TableMenu";
import FormAddFood from "./FormAddFood/FormAddFood";
import { getFoods } from "../../../utils/api";
import Loading from "../../global/Loading/Loading";
import DefaultError from "../../global/Error/DefaultError";

const Food = () => {
  const [addForm, addFormSet] = useState(false);

  const { foods, isLoading, isError } = getFoods();

  if (isLoading) return <Loading />;

  if (isError) return <DefaultError />;

  return (
    <Layout>
      <div className="flex flex-col gap-5">
        {!addForm ? <TableMenu addFormSet={addFormSet} foods={foods.data} /> : <FormAddFood />}
      </div>
    </Layout>
  );
};

export default Food;
