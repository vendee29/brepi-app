import "./App.css";
import { Pagination } from "antd";
import Tiles from "./components/Tiles";
import { useEffect, useState } from "react";

async function fetchBeers(pageNumber, signal) {
  const response = await fetch(
    `https://api.punkapi.com/v2/beers?page=${pageNumber}&per_page=6`,
    { signal }
  );
  return await response.json();
}

const App = () => {
  const [page, setPage] = useState(1);
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetchBeers(page, signal)
      .then((result) => {
        setBeers(result);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("cancelled");
        } else {
          console.log(err);
        }
      });

    return () => {
      controller.abort();
    };
  }, [page]);

  const changeHandler = (event) => {
    setPage(event);
  };

  return (
    <div className="App">
      <h1 className="heading">Brepi</h1>
      {beers && <Tiles beers={beers}></Tiles>}
      <Pagination
        onChange={changeHandler}
        className="pagination"
        defaultCurrent={1}
        total={50}
      />
    </div>
  );
};

export default App;
