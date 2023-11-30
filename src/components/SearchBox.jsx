import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useGlobalContext } from "../context/AppContext";

const SearchBox = () => {
  const {showModal} = useGlobalContext();
  return (
    <div className=" w-[650px] h-12 bg-white flex rounded-md px-2 ">
      <input
        type="text"
        placeholder="Search Brands"
        className=" rounded-md w-full h-full px-2 py-2 outline-none"
        onFocus={()=>showModal(true)}
      />
      <button>
        <AiOutlineSearch size={40} className=" text-black" />
      </button>
    </div>
  );
};

export default SearchBox;
