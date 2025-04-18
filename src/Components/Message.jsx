import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import durgaMata from "../assets/Durga_Mata.jpg";

const Message = () => {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (params.name.length < 2) {
      navigate("/", { replace: true });
    }
  }, [params.name]);

  return (
    <>
      <section className="  gap-10 flex flex-col   justify-center items-center   md:grid md:justify-center md:gap-15 md:mt-25 md:w-[100%] ">
        <img
          src={durgaMata}
          alt="maa durga ki photo"
          className=" h-70 w-70  object-contain border-4 border-white animate-pulse transition-all duration-200 delay-100  shadow-2xl  shadow-black rounded-2xl bg-black md:h-60 md:w-70 md:ml-35 md:object-contain md:bg-gradient-to-t md:to-pink-400 md:from-red-600 md:rounded-lg  md:shadow-2xl md:shadow-black md:brightness-90 md:contrast-150 md:transition md:ease-in-out md:delay-150  md:hover:scale-140 md:duration-[0.5s] md:hover:animate-none md:animate-bounce   "
        />
        <h1 className="text-2xl text-center font-serif [text-shadow:_0_4px_8px_rgba(0,0,0,15)] md:text-3xl md:font-serif md:flex md:justify-center md:items-center md:font-bold md:[text-shadow:_0_4px_8px_rgba(0,0,0,15)] ">
          {params.name} Wish-You Happy Navratri
        </h1>
      </section>
    </>
  );
};

export default Message;
