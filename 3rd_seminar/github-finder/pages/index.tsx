import React, { useEffect } from "react";
import { SearchBar } from "../components";

const Index = () => {
  useEffect(() => {
    localStorage.setItem(
      "userId",
      JSON.stringify(JSON.parse(localStorage.getItem("userId") || "[]"))
    );
  }, []);

  return (
    <React.Fragment>
      <SearchBar />
    </React.Fragment>
  );
};

export default Index;
