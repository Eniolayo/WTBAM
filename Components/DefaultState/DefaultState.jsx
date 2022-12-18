import "./defaultState.css";

function DefaultState({ moneyEarned }) {
  function reload() {
    window.location.reload();
  }
  return (
    <main className="default--background">
      <h1>You Earned {moneyEarned}</h1>
      <button className="replay--button" type="button" onClick={() => reload()}>
        Replay
      </button>
    </main>
  );
}

export default DefaultState;
