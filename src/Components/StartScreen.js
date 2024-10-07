function StartScreen({ numQuestion, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to the React Quiz</h2>
      <h3>{numQuestion} question to test your React Memory</h3>
      <button
        className="btn"
        onClick={() => {
          dispatch({ typeof: "start" });
        }}
      >
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
