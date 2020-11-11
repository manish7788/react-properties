import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <Card />
  </div>,
  document.getElementById("root")
);

function Card(prop) {
  return (
    <div>
      <h2>Chuck Norris</h2>
      <img
        src="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
        alt="avatar_img"
      />
      <p>+918 372 574</p>
      <p>gmail@chucknorris.com</p>
    </div>
  );
}

// <h2>Jack Bauer</h2>
// <img
//   src=
//   alt="avatar_img"
// />
// <p>+987 654 321</p>
// <p>jack@nowhere.com</p>
