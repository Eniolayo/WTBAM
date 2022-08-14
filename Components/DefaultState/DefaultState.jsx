import "./defaultState.css"

function DefaultState({ moneyEarned, inputedName, setInputedName }) {
  return (
    <main className="default--background">
      <h1>You Earned {moneyEarned}</h1>
      {/* {inputedName ? <h1>You Earned {moneyEarned}</h1> : <p>fff</p>} */}
    </main>
  );
}

export default DefaultState;
