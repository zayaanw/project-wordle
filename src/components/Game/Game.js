import React, { useState } from "react";
import GuessInput from "../GuessInput/GuessInput";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = useState([]);

  function handleSubmit(guessLabel) {
    const newGuess = { guessLabel, id: crypto.randomUUID() };

    setGuess([...guess, newGuess]);
  }

  console.log(guess);

  return (
    <>
      <GuessResults guess={guess} />
      <GuessInput handleSubmit={handleSubmit} />
    </>
  );
}

export default Game;
