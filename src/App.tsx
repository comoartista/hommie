import Header from "./components/Header";
import Container from "./components/Container";
import "./index.css";
// import { useEffect, useState } from "react";

function App() {
  // const [searchText, setSearchText] = useState("");
  // const [results, setResults] = useState([]);

  // console.log(results);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const url = `https://api.rentcast.io/v1/properties?city=Austin&state=TX&bedrooms=3&bathrooms=2&limit=10`;
  //     const options = {
  //       method: "GET",
  //       headers: {
  //         Accept: "application/json",
  //         "X-Api-Key": "faeaa4b852974afa8391580fd1d5ba10",
  //       },
  //     };
  //     const response = await fetch(url, options);
  //     const data = await response.json();
  //     setResults(data);
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      <Header />
      <Container />
    </>
  );
}

export default App;
