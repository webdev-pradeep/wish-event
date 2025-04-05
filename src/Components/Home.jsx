import React, { useState } from "react";
import { useNavigate } from "react-router";
import durgaMaa from "../assets/maa_durga.jpg";

const Home = () => {
  const [inputValue, setInputValue] = useState();

  const navigate = useNavigate();

  function handler(e) {
    e.preventDefault();
    navigate(`/${inputValue.toLowerCase()}`);
  }

  return (
    <>
      <section className="w-[100%] flex justify-center items-center mt-10  md:flex md:justify-center md:mt-25 ">
        <img
          src={durgaMaa}
          alt="maa durga ki photo"
          className="  contrast-150 rounded-2xl shadow-2xl shadow-black hover:scale-150 animate-pulse brightness-110 duration-75 ease-in-out h-65 w-60 object-contain  md:h-72 md:w-72  md:object-contain md:bg-gradient-to-t md:to-pink-400 md:from-red-600 md:rounded-lg  md:shadow-2xl md:shadow-black md:brightness-90  md:transition md:ease-in-out md:delay-150  md:hover:scale-140 md:duration-[0.5s] md:hover:animate-none md:animate-ping  "
        />
      </section>

      <form
        className=" w-[100%] flex flex-col justify-center items-center mt-10 gap-5 md:fixed md:bottom-10 md:flex md:justify-center  md:w-[100%] md:gap-5"
        onSubmit={handler}
      >
        <input
          placeholder="Enter name"
          onChange={(e) => setInputValue(e.target.value)}
          className="bg-red-400 text-2xl caret-black  text-white p-2 pl-5 rounded-xl outline-none md:bg-red-400 md:text-white md:p-2 md:rounded-md  md:text-2xl md:caret-pink-500 md:outline-2xl "
        />
        <button
          className={` text-center w-[120px] h-[40px] text-2xl rounded active:active:bg-red-400  transition-all duration-[0.2s] ease-in-out md:w-20 md:text-2xl  md:rounded md:text-white md:active:bg-red-400  md:transition-all md:duration-[0.2s] md:ease-in-out  ${
            inputValue
              ? "bg-green-600 md:bg-green-600"
              : "bg-red-600 md:bg-red-600"
          }`}
          type="submit"
          disabled={inputValue ? false : true}
        >
          wish
        </button>
      </form>
    </>
  );
};

export default Home;
