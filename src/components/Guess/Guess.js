import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ string, answer }) {
  const wordle = () => {
    if (!string) {
      return range(5).map((_, index) => (
        <span key={index} className={`cell`}>
          {undefined}
        </span>
      ));
    } else {
      const results = checkGuess(string, answer);
      return results.map(({ letter, status }, index) => (
        <span key={index} className={`cell ${status}`}>
          {letter}
        </span>
      ));
    }
  };

  return (
    <>
      <p className="guess">{wordle()}</p>
    </>
  );
}

export default Guess;
