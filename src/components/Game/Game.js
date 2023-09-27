import React, { useState } from "react";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Banner from "../Banner/Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  const [status, setStatus] = useState("running");

  function handleSubmit(guessLabel) {
    const nextGuess = [...guesses, guessLabel];
    setGuesses(nextGuess);

    if (guessLabel === answer) {
      setStatus("Won");
    } else if (nextGuess.length >= 6) {
      setStatus("Lost");
    }
  }

  return (
    <>
      {status}
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleSubmit={handleSubmit} />
      {status !== "running" && (
        <Banner
          status={status}
          numberofGuesses={guesses.length}
          answer={answer}
        />
      )}
    </>
  );
}

export default Game;
