import React from "react";
import BookList from "./components/BookList";
import ContentWrapper from "./components/ContentWrapper";
import HeroSection from "./components/HeroSection";
import SearchBar from "./components/SearchBar";

function App() {
  const onSearch = (searchText: string, selectedLang: string) => {
    console.log(searchText);
  };

  return (
    <ContentWrapper>
      <HeroSection />
      <SearchBar onSearch={onSearch} />
      <BookList />
    </ContentWrapper>
  );
}

export default App;
