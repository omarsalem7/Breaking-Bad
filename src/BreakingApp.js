import "./BreakingApp.css";
import React, { useState } from "react";
import axios from "axios";
import Header from "./components/ui/Header";
import Charchters from "./components/charchters/Charchters";
import Search from "./components/ui/Search";
import useDebouncedEffect from "./useDebouncedEffect";

const BreakingApp = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  //useEffect with debounce
  useDebouncedEffect(
    () => {
      const fetchItems = async () => {
        const result = await axios(
          `https://www.breakingbadapi.com/api/characters/?name=${query}`
        );
        console.log(result.data);
        setItems(result.data);
        setIsLoading(false);
      };
      fetchItems();
    },
    1000,
    [query]
  );
  //using useEffect without debounce
  // useEffect(() => {
  //   const fetchItems = async () => {
  //     const result = await axios(
  //       `https://www.breakingbadapi.com/api/characters/?name=${query}`
  //     );
  //     console.log(result.data);
  //     setItems(result.data);
  //     setIsLoading(false);
  //   };
  //   fetchItems();
  // }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <Charchters items={items} isLoading={isLoading} />
    </div>
  );
};

export default BreakingApp;
