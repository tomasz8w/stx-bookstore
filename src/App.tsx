import BookList from "./components/BookList";
import ContentWrapper from "./components/ContentWrapper";
import HeroSection from "./components/HeroSection";
import SearchBar from "./components/SearchBar";
import useSearchBooks from "./hooks/useSearchBooks";

function App() {
  const { changeSearchParameters, foundBooks, fetchMoreBooks } =
    useSearchBooks();
  const onSearch = (searchText: string, searchLang: string) => {
    changeSearchParameters({ searchText, searchLang });
  };

  return (
    <ContentWrapper>
      <HeroSection />
      <SearchBar onSearch={onSearch} />
      <BookList foundBooks={foundBooks} onScrollEnd={fetchMoreBooks} />
    </ContentWrapper>
  );
}

export default App;
