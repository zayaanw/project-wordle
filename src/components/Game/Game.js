import React, { useState } from "react";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  function handleSubmit(guessLabel) {
    setGuesses([...guesses, guessLabel]);
  }

  console.log(guesses);

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput handleSubmit={handleSubmit} />
    </>
  );
}

export default Game;
