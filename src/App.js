import React from "react";
import "./styles.css";

export default function App() {
  const [score, setScore] = React.useState(76);
  const [wicket, setWicket] = React.useState(2);
  const [ball, setBall] = React.useState(50);

  const AddScore = (value) => {
    setScore(score + value);
  };

  const AddWicket = (value) => {
    setWicket(wicket + value);
  };

  const AddBall = (value) => {
    setBall(ball + value);
  };

  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{""}
          <h1 className="scoreCount">
            {
              // show "score" here
              score
            }
          </h1>
        </div>
        <div>
          Wicket:{""}
          <h1 className="wicketCount">
            {
              // show wicket here
              wicket
            }
          </h1>
        </div>

        <div>
          Over:{}
          <h1 className="overCount">
            {
              Math.ceil(ball / 6) + "." + (ball % 6)

              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={() => AddScore(1)}>
          Add 1
        </button>
        <button className="addScore4" onClick={() => AddScore(4)}>
          Add 4
        </button>
        <button className="addScore6" onClick={() => AddScore(6)}>
          Add 6
        </button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={() => AddWicket(1)}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={() => AddBall(1)}>Add 1</button>
      </div>
      <div>
        <h1>{score > 100 ? "India Won" : ""}</h1>
      </div>
    </div>
  );
}
