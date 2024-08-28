import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import MyContext from "../../context/data/MyContext";

const Home = () => {
  const context = useContext(MyContext);
  const { state, color } = context;
  return (
    <Layout>
      <div>Home</div>
      <h1>Name: {state.name}</h1>
      <h1>Roll No: {state.rollno}</h1>
      <h1>My Color: {color}</h1>
    </Layout>
  );
};

export default Home;
