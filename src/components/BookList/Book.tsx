import { TBook } from "../../models/Book";

type Props = {
  book: TBook;
};
const Book = ({ book }: Props) => {
  return (
    <div style={{ display: "flex", flex: 1, height: "100%" }}>
      <article
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          padding: "0.5rem",
          boxShadow: "1px 1px 3px rgb(0,0,0,0.16)",
        }}
      >
        <div style={{ display: "flex", flex: "1", gap: "0.5rem" }}>
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
                  marginLeft: "auto",
                  right: 0,
                  height: "200px",
                  objectFit: "contain",
                }}
              />
            </div>
          )}
        </div>
        {book.publishedDate && (
          <p style={{ fontSize: "0.8rem" }}>
            Published date: {book.publishedDate.split("-")?.at(0)}
          </p>
        )}
      </article>
    </div>
  );
};

export default Book;
