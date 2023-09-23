import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function UsersGuess({ guesses }) {
  let TotalGuesses = range(0, NUM_OF_GUESSES_ALLOWED - 1);
  TotalGuesses = TotalGuesses.map((_, index) =>
    guesses[index] !== undefined ? guesses[index] : ""
  );

  console.log(TotalGuesses);

  return (
    <div className="guess-results">
      {TotalGuesses.map((string, index) => (
        <p key={index} className="guess">
          <Guess string={string} />
        </p>
      ))}
    </div>
  );
}

export default UsersGuess;
