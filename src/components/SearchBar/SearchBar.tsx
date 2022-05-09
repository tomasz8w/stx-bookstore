const SearchBar = () => (
  <section
    style={{
      display: "flex",
      flexDirection: "row",
      borderColor: "gray",
      gap: "1rem",
      boxShadow: "1px 1px 3px rgb(0,0,0,0.16)",
      borderRadius: "5px",
      alignItems: "center",
    }}
  >
    <input type="search" />
    <input type="radio" id="pl" value="pl" name="lang" />
    <label htmlFor="pl">PL</label>
    <input type="radio" id="en" value="en" name="lang" />
    <label htmlFor="en">EN</label>

    <button
      type="button"
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

export default SearchBar;
