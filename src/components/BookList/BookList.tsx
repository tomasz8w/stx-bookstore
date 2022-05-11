import Book from "./Book";

const BookList = () => {
  return (
    <section
      style={{
        padding: "0.5rem",
        display: "grid",
        gap: "1rem",
        overflow: "auto",
        gridTemplateColumns: "repeat(5, 1fr)",
        gridAutoRows: "minmax(100px,auto)",
      }}
    >
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

export default BookList;
