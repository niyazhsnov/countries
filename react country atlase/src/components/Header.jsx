import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ theme, toggleTheme }) => {
  let navigate = useNavigate();
  return (
    <div className="flex bg-white items-center justify-between shadow-md 2xl:py-7 2xl:px-10 py-5 px-6 dark:text-darktext text-gray-900 dark:bg-darkelem">
      <div className="dark:text-darktext">
        <h1 onClick={() => navigate("/")} className="text-xl font-semibold cursor-pointer">Country App</h1>
    
      </div>
      <div onClick={toggleTheme} className="flex items-center space-x-2 font-semibold cursor-pointer">
    
        <p>{!theme ? "Dark" : "Light"} Mode</p>
      </div>
    </div>
  );
};

export default Header;
