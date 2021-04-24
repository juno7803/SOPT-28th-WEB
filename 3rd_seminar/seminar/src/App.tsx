import React from "react";
import { Hello } from "./components";

const sopt = "web part";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Hello sopt={sopt} />
    </React.Fragment>
  );
};

export default App;
