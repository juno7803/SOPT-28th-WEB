import React, { useState } from "react";
import { SearchBar, UserCard } from "./components";
import { getUserData } from "./lib/api";
import { IUserData } from "./types";

const App = () => {
  const [userData, setUserData] = useState<IUserData | undefined>(undefined);

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
