import React from "react";
import Layout from "../../global/Layout";
import CardFood from "./CardFood/CardFood";
import { getFoods } from "../../../utils/api";
import Loading from "../../global/Loading/Loading";
import DefaultError from "../../global/Error/DefaultError";

const Transaction = () => {
  const { foods, isLoading, isError } = getFoods();

  if (isLoading) return <Loading />;

  if (isError) return <DefaultError />;

  return (
    <Layout>
      <div className="flex gap-5 flex-wrap">
        {foods?.data?.data.map((e, i) => {
          return <CardFood foods={e} key={i} />;
        })}
      </div>
    </Layout>
  );
};

export default Transaction;
