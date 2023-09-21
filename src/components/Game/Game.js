import React, { useState } from "react";
import GuessInput from "../GuessInput/GuessInput";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = useState({
    guessLabel: "",
    id: crypto.randomUUID(),
  });

  function handleSubmit(guessLabel) {
    setGuess({ ...guess, guessLabel });
  }

  console.log(guess);

  return <GuessInput handleSubmit={handleSubmit} />;
}

export default Game;
