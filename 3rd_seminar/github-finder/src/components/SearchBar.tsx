import React, { useState } from "react";

interface ISearchProps {
  getData: (userName: string) => Promise<void>;
}

const SearchBar = ({ getData }: ISearchProps) => {
  const [userName, setUserName] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUserName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getData(userName);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userName}
        onChange={handleChange}
        placeholder="아이디를 입력하세요!"
      />
    </form>
  );
};

export default SearchBar;
