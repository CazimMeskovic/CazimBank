import React from "react";

const Button = ({ styles }) => (
  <button onClick={() => window.open("https://bankappole.netlify.app/")} type="button" className={` py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Try our app
  </button>
);

export default Button;
