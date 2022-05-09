import React from "react";
import ContentWrapper from "./components/ContentWrapper";
import HeroSection from "./components/HeroSection";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <ContentWrapper>
      <HeroSection />
      <SearchBar />
    </ContentWrapper>
  );
}

export default App;
