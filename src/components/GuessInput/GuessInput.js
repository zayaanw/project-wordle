import React, { useState } from "react";

function GuessInput({ handleSubmit }) {
  const [guessLabel, setGuessLabel] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(guessLabel);
        setGuessLabel("");
      }}
      className="guess-input-wrapper"
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        maxLength={5}
        title="5 letter word"
        pattern="[A-Z]{5}"
        type="text"
        value={guessLabel}
        onChange={(e) => setGuessLabel(e.target.value.toLocaleUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
