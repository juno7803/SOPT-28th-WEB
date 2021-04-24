import React, { useState, useEffect } from "react";

interface IHello {
  sopt: string;
}

const Hello: React.FC<IHello> = ({ sopt }) => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((c) => c + 1);
  };

  useEffect(() => {
    document.title = `You Clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <button onClick={handleClick}>PLUS</button>
      <h1>카운트 횟수 : {count}</h1>
    </div>
  );
};

export default Hello;
