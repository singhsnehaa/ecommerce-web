import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import MyContext from "../../context/data/MyContext";

const Order = () => {
  const context = useContext(MyContext);
  const { state } = context;
  return (
    <Layout>
      <div>Order</div>
      <h1>Name: {state.name}</h1>
      <h1>Roll No: {state.rollno}</h1>
    </Layout>
  );
};

export default Order;
