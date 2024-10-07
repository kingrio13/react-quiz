function FinishScreen({ points, maxPossiblePoints, highScore, dispatch }) {
  const pointPercent = (points / maxPossiblePoints) * 100;

  let emoji;
  if (pointPercent === 100) emoji = "🎖️";
  if (pointPercent >= 80 && pointPercent < 100) emoji = "🥂";
  if (pointPercent >= 50 && pointPercent < 80) emoji = "😊";
  if (pointPercent >= 0 && pointPercent < 50) emoji = "😟";
  if (pointPercent === 0) emoji = "🤦";

  return (
    <>
      <p className="result">
        You Scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {pointPercent.toFixed(2)}%) {emoji}
      </p>
      <p className="highscore">(HighScore: {highScore})</p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ typeof: "restart" })}
      >
        Restart
      </button>
    </>
  );
}

export default FinishScreen;
