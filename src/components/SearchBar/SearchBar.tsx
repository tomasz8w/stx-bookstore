import React, { useState } from "react";

type Props = {
  onSearch: (searchText: string, searchLang: string) => void;
};

const SearchBar = ({ onSearch }: Props) => {
  const [searchText, setSearchText] = useState("");
  const [searchLang, setsearchLang] = useState("pl");

  const handleSearchTextChange = (event: React.FormEvent<HTMLInputElement>) => {
    setSearchText(event.currentTarget.value);
  };

  const handleLangChange = (event: React.FormEvent<HTMLInputElement>) => {
    setsearchLang(event.currentTarget.value);
  };

  const handleSearchClick = () => {
    onSearch(searchText, searchLang);
  };

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "row",
        borderColor: "gray",
        gap: "1rem",
        boxShadow: "1px 1px 3px rgb(0,0,0,0.16)",
        borderRadius: "5px",
        alignItems: "center",
        padding: "0.5rem",
      }}
    >
      <input
        type="search"
        value={searchText}
        onChange={handleSearchTextChange}
      />
      <input
        type="radio"
        id="pl"
        value="pl"
        name="lang"
        defaultChecked
        onChange={handleLangChange}
      />
      <label htmlFor="pl">PL</label>
      <input
        type="radio"
        id="en"
        value="en"
        name="lang"
        onChange={handleLangChange}
      />
      <label htmlFor="en">EN</label>

      <button
        type="button"
        onClick={handleSearchClick}
        style={{
          border: "1px solid gray",
          backgroundColor: "#fff",
          padding: "0.4rem",
          borderRadius: "5px",
        }}
      >
        Search
      </button>
    </section>
  );
};
export default SearchBar;
