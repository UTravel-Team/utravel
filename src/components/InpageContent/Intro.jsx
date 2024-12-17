import React from "react";

function Intro({ text }) {
  return (
    <div className="text-center">
      <p className="text-lg leading-relaxed">{text}</p>
    </div>
  );
}

export default Intro;
