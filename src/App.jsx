import { useRef, useState } from "react";
import zevi from "./assets/zevi2.jpg";
import SearchBox from "./components/SearchBox";
import SearchModal from "./components/SearchModal";
import { useGlobalContext } from "./context/AppContext";


function App() {
  const { isModalOpen, showModal } = useGlobalContext();

  const modalRef = useRef();

  const handleClick = (e) => {
    if (modalRef.current && modalRef.current.contains(e.target)) {
      return;
    } else {
      showModal(false);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="text-2x text-center  bg-sky-300 h-screen w-screen flex justify-center  items-center "
    >
      <img
        src={zevi}
        alt=""
        className="z-0 relative h-full w-full  mx-auto  border-4 border-black-500 object-cover "
      />

      <div className=" h-full w-full absolute z-10  bg-black opacity-60"></div>

      <div
        ref={modalRef}
        className="top-40 z-20 absolute space-y-4 flex flex-col items-center "
      >
        <SearchBox />
        {isModalOpen && <SearchModal />}
      </div>
    </div>
  );
}

export default App;
