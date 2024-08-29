import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import MyContext from "../../context/data/MyContext";

const Home = () => {
  const context = useContext(MyContext);
  return (
    <Layout>
      <div>Home</div>
    </Layout>
  );
};

export default Home;
