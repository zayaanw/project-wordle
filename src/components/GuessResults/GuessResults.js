import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function UsersGuess({ guess }) {
  const TotalGuesses = range(0, NUM_OF_GUESSES_ALLOWED - 1);

  return (
    <div className="guess-results">
      {/* {guess.map(({ guessLabel, id }) => (
        <p key={id}>{guessLabel}</p>
      ))} */}
      {TotalGuesses.map((option) => (
        <Guess />
      ))}
    </div>
  );
}

export default UsersGuess;
