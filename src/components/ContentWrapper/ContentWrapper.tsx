type Props = {
  children: React.ReactNode;
};

const ContentWrapper = ({ children }: Props) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      width: "100vw",
      minWidth: "950px",
      height: "100vh",
      alignItems: "center",
    }}
  >
    {children}
  </div>
);

export default ContentWrapper;
