function NextButton({ dispatch, answer, numQuestion, index }) {
  if (answer === null) return null;

  if (index < numQuestion - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ typeof: "nextQuestion" })}
      >
        Next
      </button>
    );
  } else {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ typeof: "finished" })}
      >
        Finish
      </button>
    );
  }
}

export default NextButton;
