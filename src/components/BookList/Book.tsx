const Book = () => {
  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
        boxShadow: "1px 1px 3px rgb(0,0,0,0.16)",
      }}
    >
      <p>Title: The Book</p>
      <p>Description: description</p>
      <p>Author: author</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100%",
          width: "100%",
          position: "relative",
        }}
      >
        <img
          src=""
          alt="img"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "scale-down",
            position: "absolute",
          }}
        />
      </div>
    </article>
  );
};

export default Book;
