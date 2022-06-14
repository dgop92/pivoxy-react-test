import React from "react";
import { BaseMain } from "./style";

const tempCard = {
  width: 250,
  backgroundColor: "white",
  height: 200,
  margin: "0.5rem",
};

export default function Main() {
  return (
    <BaseMain>
      <div style={tempCard}>card1</div>
      <div style={tempCard}>card2</div>
      <div style={tempCard}>card2</div>
      <div style={tempCard}>card2</div>
      <div style={tempCard}>card2</div>
      <div style={tempCard}>card2</div>
    </BaseMain>
  );
}
