import "./App.css";
import { data } from "./data";
import { useRef, useState, useEffect } from "react";
function App() {
  const [index, setIndex] = useState(0);
  const eleList = useRef([]);
  const goToELement = () => {
    eleList.current[index]?.scrollIntoView({ behavior: "smooth" });
    eleList.current[index].style.backgroundColor = "#f5f542";
  };
  useEffect(() => {
    eleList.current = eleList.current.slice(0, data.length);
  }, []);
  return (
    <div className="App">
      <div className="searchContainer">
        <input
          type="number"
          className="inp"
          value={index}
          onChange={(e) => setIndex(e.target.value)}
          min="0"
          max={data.length - 1}
        />
        <button className="btn" onClick={goToELement}>
          Search
        </button>
      </div>
      <div className="cardContainer">
        {data.map((e, i) => {
          return (
            <div
              key={i}
              ref={(el) => (eleList.current[i] = el)}
              style={{ backgroundColor: e.bg }}
              className="card"
            >
              index : {i}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
