import "./Parallax.css";

const Parallax = ({ type }) => {
  return (
    <div
      className="parallax"
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg,#111132,#0c0c1d)"
            : "linear-gradient(180deg,#111132,#505064)",
      }}
    >
      <h1>{type === "services" ? "What We Do" : "What We Did"}</h1>
      <div className="mountains"></div>
      <div
        className="planets"
        style={{
          backgroundImage: `url(${
            type === "services" ? "/public/planets.png" : "/public/sun.png"
          })`,
        }}
      ></div>
      <div className="stars"></div>
    </div>
  );
};

export default Parallax;
