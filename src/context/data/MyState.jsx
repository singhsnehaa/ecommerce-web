import React from "react";
import MyContext from "./MyContext";

const MyState = (props) => {
  const state = { name: "Sneha", rollno: "27" };
  const color = "red";

  return (
    <MyContext.Provider value={{ state, color }}>
      {props.children}
    </MyContext.Provider>
  );
};

export default MyState;
