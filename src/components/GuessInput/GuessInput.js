import React from "react";

function GuessInput() {
  return (
    <form class="guess-input-wrapper">
      <label for="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" />
    </form>
  );
}

export default GuessInput;
