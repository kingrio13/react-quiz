import Options from "./Options";

function Question({ myquestion, dispatch, answer }) {
  //console.log(questions);

  const { question } = myquestion;

  //console.log(options);
  return (
    <div>
      <h4>{question}</h4>

      <Options myquestion={myquestion} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
