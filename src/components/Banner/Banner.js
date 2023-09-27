import React from "react";

function Banner({ status, numberofGuesses, answer }) {
  if (status === "Won") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {numberofGuesses} guesses</strong>.
        </p>
      </div>
    );
  } else if (status === "Lost") {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }
}

export default Banner;
