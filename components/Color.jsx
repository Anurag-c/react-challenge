function Color({ r, g, b }) {
  return (
    <div style={{ backgroundColor: `rgb(${r}, ${g}, ${b})`, padding: "20px" }}>
      Color Component
    </div>
  );
}

export default Color;
