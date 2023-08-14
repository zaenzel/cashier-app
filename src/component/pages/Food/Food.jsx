import React, { useState } from "react";
import Layout from "../../global/Layout";
import WrapTableMenu from "./WrapTableMenu/WrapTableMenu";
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
        {!addForm ? <WrapTableMenu addFormSet={addFormSet} foods={foods.data} /> : <FormAddFood addFormSet={addFormSet} />}
      </div>
    </Layout>
  );
};

export default Food;
