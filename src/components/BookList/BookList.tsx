import useEndOfScroll from "../../hooks/useEndOfScroll";
import { TBook } from "../../models/Book";
import Book from "./Book";

type Props = {
  foundBooks: TBook[] | undefined;
  onScrollEnd: () => void;
};

const BookList = ({ foundBooks, onScrollEnd }: Props) => {
  const { onScroll, sectionRef } = useEndOfScroll(onScrollEnd);

  return (
    <section
      onScroll={onScroll}
      ref={sectionRef}
      style={{
        padding: "0.5rem",
        display: "grid",
        gap: "1rem",
        overflow: "auto",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridAutoRows: "minmax(250px,auto)",
      }}
    >
      {foundBooks?.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </section>
  );
};

export default BookList;
