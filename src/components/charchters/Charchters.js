import React from "react";
import Charchter from "./charchter/Charchter";
import Spinner from "../ui/Spinner";
const Charchters = ({ isLoading, items }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((charchter) => (
        <Charchter key={charchter.char_id} charchter={charchter} />
      ))}
    </section>
  );
};

export default Charchters;
