import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function Guess({ string }) {
  let arr = range(0, 5).map((option) => (option = ""));

  const stringArr = [];

  if (string) {
    string && string.split("").forEach((c) => stringArr.push(c));
    arr = stringArr;
  }

  console.log({ stringArr });

  console.log({ arr });
  // string.split("").forEach((c) => arr.push(c));
  console.log(string);

  return (
    <>
      {arr.map((character) => (
        <span className="cell">{character}</span>
      ))}
    </>
  );
}

export default Guess;
