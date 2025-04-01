import React from "react";
import { useParams, useSearchParams } from "react-router";

const Message = () => {
  const params = useParams();
  const [searchParams] = useSearchParams();

  return (
    <>
      <h1>{params.name} Wish-You</h1>
      <h1>Happy Navratri</h1>

      <p>
        {searchParams.get("event")}
        {searchParams.get("date")}
      </p>
    </>
  );
};

export default Message;
