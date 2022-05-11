import { TBook } from "models/Book";
import useBookStore from "stores/bookStore";

type Props = {
  book: TBook;
};
const Book = ({ book }: Props) => {
  const { addBook, deleteBook, isBookInStore } = useBookStore();

  const bookInStore = isBookInStore(book.id);

  return (
    <article
      style={{
        backgroundColor: bookInStore ? "#F2E3BC" : "unset",
        display: "flex",
        flexDirection: "column",
        flex: 1,
        padding: "0.5rem",
        boxShadow: "1px 1px 3px rgb(0,0,0,0.16)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "4fr 1fr",
          gap: "0.5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p style={{ fontWeight: 500 }}>{book.title}</p>
          <p>{book.description?.slice(0, 200).concat("...")}</p>
        </div>
        {book.imageLink && (
          <div
            style={{
              display: "flex",
              flex: "0 1 auto",
              justifyContent: "center",
              height: "100%",
              marginLeft: "auto",
            }}
          >
            <img
              src={book.imageLink}
              alt="img"
              style={{
                right: 0,
                height: "200px",
                objectFit: "contain",
              }}
            />
          </div>
        )}
      </div>
      {book.publishedDate && (
        <p style={{ fontSize: "0.8rem", marginTop: "auto" }}>
          Published date: {book.publishedDate.split("-")?.at(0)}
        </p>
      )}
      {bookInStore ? (
        <button
          style={{ marginTop: "auto" }}
          onClick={() => deleteBook(book.id)}
        >
          Remove from library
        </button>
      ) : (
        <button style={{ marginTop: "auto" }} onClick={() => addBook(book)}>
          Add to library
        </button>
      )}
    </article>
  );
};

export default Book;
