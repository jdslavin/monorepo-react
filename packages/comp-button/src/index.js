import React from "react";
import JeffCont from "./test2/jeffcont";

const Button = ({ type = "button", children, onClick }) => (
  <div>
    {/* <button type={type} className="button" onClick={onClick}>
      {children}
    </button> */}
    <JeffCont />
  </div>
);

export default Button;
