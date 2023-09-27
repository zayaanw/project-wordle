import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : `cell`;
  return <span className={className}>{letter}</span>;
}

function Guess({ string, answer }) {
  const results = checkGuess(string, answer);

  return (
    <>
      <p className="guess">
        {range(5).map((num) => (
          <Cell
            key={num}
            letter={results ? results[num].letter : undefined}
            status={results ? results[num].status : undefined}
          />
        ))}
      </p>
    </>
  );
}

export default Guess;
