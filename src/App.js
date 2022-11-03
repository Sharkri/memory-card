import { useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import countries from "./countries.json";
import uniqid from "uniqid";

function App() {
  const pickRandomCountries = (countryAmount) => {
    // Clone countries to avoid modifying original array
    const availableCountries = [...countries];
    const randomCountries = [];
    for (let i = 0; i < countryAmount; i++) {
      // Get random index
      const index = Math.floor(Math.random() * availableCountries.length);
      const country = availableCountries[index];
      const flag = require(`./images/${country.code.toLowerCase()}.png`);
      randomCountries.push({ image: flag, name: country.name, id: uniqid() });
      // Remove the country at index selected to avoid duplicates appearing
      availableCountries.splice(index, 1);
    }

    return randomCountries;
  };

  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cards, setCards] = useState(pickRandomCountries(4));

  return (
    <div className="App">
      <Header currentScore={currentScore} bestScore={bestScore} />
      <Main cards={cards} />
    </div>
  );
}

export default App;
