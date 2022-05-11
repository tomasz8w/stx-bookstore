import { TBook } from "models/Book";
import useEndOfScroll from "hooks/useEndOfScroll";

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
        gridAutoRows: "minmax(280px,auto)",
      }}
    >
      {foundBooks?.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </section>
  );
};

export default BookList;
