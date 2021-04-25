import React, { useEffect, useState } from "react";
import { SearchBar, UserCard } from "./components";
import { getUserData } from "./lib/api";

const App = () => {
  const [userData, setUserData] = useState(undefined);

  const getData = async (userName: string) => {
    const data = await getUserData(userName);
    setUserData(data);
  };

  return (
    <React.Fragment>
      <SearchBar getData={getData} />
      <UserCard userData={userData} />
    </React.Fragment>
  );
};

export default App;
