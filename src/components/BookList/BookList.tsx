import { TBook } from "../models/Book";
import Book from "./Book";

type Props = {
  foundBooks: TBook[] | undefined;
};

const BookList = ({ foundBooks }: Props) => {
  return (
    <section
      style={{
        padding: "0.5rem",
        display: "grid",
        gap: "1rem",
        overflow: "auto",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridAutoRows: "minmax(300px,auto)",
      }}
    >
      {foundBooks?.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </section>
  );
};

export default BookList;
