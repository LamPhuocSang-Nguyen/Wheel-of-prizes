import React from "react";
import "./styles.css";
import WheelComponent from "react-wheel-of-prizes";
import "react-wheel-of-prizes/dist/index.css";
export default function App() {
  const segments = [
    "better luck next time",
    "won 70",
    "won 10",
    "better luck next time",
    "won 2",
    "won uber pass",
    "better luck next time",
    "won a voucher"
  ];
  const segColors = [
    "#EE4040",
    "#F0CF50",
    "#815CD1",
    "#3DA5E0",
    "#34A24F",
    "#F9AA1F",
    "#EC3F3F",
    "#FF9000"
  ];
  const onFinished = (winner) => {
    console.log(winner);
  };
  return (
    <WheelComponent
      segments={segments}
      segColors={segColors}
      winningSegment="better luck next time"
      onFinished={(winner) => onFinished(winner)}
      primaryColor="black"
      contrastColor="white"
      buttonText="Spin"
      isOnlyOnce={true}
    />
  );
}
