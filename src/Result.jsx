import React from "react";

export default function Result({ score }) {
  return (
    <div>
      <h1>{score > 100 ? "India Won" : ""}</h1>
    </div>
  );
}
