import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [kanyeQuote, setKanyeQuote] = useState({});

  // Run every time the component re-renders
  // useEffect(() => {
  //   fetch("https://api.kanye.rest")
  //     .then((request) => request.json())
  //     .then((quote) => setKanyeQuote(quote));
  // });

  // Runs the first time the component re-renders
  //  useEffect(() => {
  //   fetch("https://api.kanye.rest")
  //     .then((request) => request.json())
  //     .then((quote) => setKanyeQuote(quote));
  // }, []);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     console.log('This will run after 1 second!')
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }, []);

  useEffect(() => {
    fetch("https://api.kanye.rest")
      .then((request) => request.json())
      .then((quote) => setKanyeQuote(quote));
  }, []);

  return (
    <>
      <h1>Hello world</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 934)}>Blah</button>
      <h2>{kanyeQuote.quote}</h2>
    </>
  );
};

export default App;

// import React, { useEffect, useState } from "react";
// import "./App.scss";

// Error handling

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [kanyeQuote, setQuote] = useState({});
//   const [error, setError] = useState(null);

//   const getKanyeQuote = () => {
//     fetch("https://api.kanye.rest")
//       .then((request) => request.json())
//       .then((quote) => {
//         setQuote(quote)
//         setError(null)
//       })
//       .catch((error) => setError(error));
//   };

//   useEffect(() => {
//     getKanyeQuote();
//   }, []);

//   return (
//     <>
//       <h1>Hello world</h1>
//       <p>{count}</p>
//       <button onClick={() => getKanyeQuote()}>blah</button>
//       {error ? <h2>{error.message}</h2> : <h2>{kanyeQuote.quote}</h2>}
//     </>
//   );
// };

// export default App;
