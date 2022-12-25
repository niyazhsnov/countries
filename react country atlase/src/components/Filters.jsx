import React from "react";
import Dropdown from "./Dropdown";

const Filters = ({ value, changeHandler,region,setRegion }) => {
  return (
    <div className="flex items-center flex-col space-y-5 sm:space-y-0 sm:flex-row justify-between">
      <div className="flex items-center w-80 2xl:w-[28rem] sm:w-96 text-gray-900 shadow-md space-x-2 dark:text-lightelem bg-white rounded-sm 2xl:px-6 2xl:py-5 px-4 py-3 dark:bg-darkelem">
  
        <input
        className="bg-transparent outline-none  "
          placeholder="Search for a country..."
          value={value}
          onChange={(e) => changeHandler(e.target.value)}
        />
      </div>
      <div>
          <Dropdown region={region} setRegion={setRegion}/>
      </div>
    </div>
  );
};

export default Filters;
