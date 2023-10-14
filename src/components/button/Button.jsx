import React from "react";
import "./button.css";
import { AiOutlineArrowRight } from "react-icons/ai";

export function ButtonPrimary({ text }) {
  return <button className="button primary">{text}</button>;
}

export function ButtonSecondary({ text }) {
  return <button className="button secondary">{text}</button>;
}

export function ButtonLinkArrow({ text, style }) {
  return (
    <button style={style} className="button link">
      {text}
      <AiOutlineArrowRight />
    </button>
  );
}
