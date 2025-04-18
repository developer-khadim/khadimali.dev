const Loader = () => {
  return (
    <div className="loader z-50">
      <span style={{ "--d": "100ms" }}>l</span>
      <span style={{ "--d": "250ms" }}>o</span>
      <span style={{ "--d": "400ms" }}>a</span>
      <span style={{ "--d": "550ms" }}>d</span>
      <span style={{ "--d": "700ms" }}>i</span>
      <span style={{ "--d": "850ms" }}>n</span>
      <span style={{ "--d": "1000ms" }}>g</span>
    </div>
  );
};

export default Loader;
