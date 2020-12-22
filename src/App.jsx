import "./App.css";
import ScoreCard from "./components/ScoreCard";

const App = () => {
  // MAP SYNTAX
  // Initial Data source
  const scores = [66, 20, 45];
  // Update when Completed
  // const scores = [66, 20, 45, 1900, 55];

  // Recap map syntax -> what parameters are available
  const insideMap = scores.map((element, index, array) => {
    const content = `Element : ${element} Index : ${index} Array : [${array}]`;
    return <p>{content}</p>;
  });

  // CREATING A SCORES OBJECT
  // {score: 66, id: 1, didWin: true}
  const playerCards = scores
    .sort((a, b) => b - a)
    .map((score, index) => {
      const didWin = index === 0;
      const playerCard = { score: score, id: index, position: index + 1, didWin };
      return playerCard;
    });

  // USING OBJECT TO CREATE COMPONENTS
  const playersJsx = playerCards.map((player) => {
    return <ScoreCard key={player.id} score={player.score} position={player.position} didWin={player.didWin} />;
  });

  // Challenge
  // There is a data file in the data folder => [{data},{data}]
  // Create a reusable component to display each object in the array
  // Map over the data file and create a component for each object
  // Have fun and display it in the app

  return (
    <main className="App">
      <h1>Lets Get Mapping</h1>
      <p>Inside of a map </p>
      {insideMap}
      {console.log(playerCards)}
      {playersJsx}
    </main>
  );
};

export default App;
