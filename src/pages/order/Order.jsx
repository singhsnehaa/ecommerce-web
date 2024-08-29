import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import MyContext from "../../context/data/MyContext";

const Order = () => {
  const context = useContext(MyContext);
  // const { state } = context;
  return (
    <Layout>
      <div>Order</div>
    </Layout>
  );
};

export default Order;
