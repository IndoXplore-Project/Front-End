import React from "react";
import "./button.css";
import { AiOutlineArrowRight } from "react-icons/ai";

export function ButtonPrimary(props) {
  return (
    <button className="button primary" onClick={props.onClick}>
      {props.text}
    </button>
  );
}

export function ButtonSecondary(props) {
  return (
    <button className="button secondary" onClick={props.onClick}>
      {props.text}
    </button>
  );
}

export function ButtonLinkArrow(props) {
  return (
    <button style={props.style} className="button link" onClick={props.onClick}>
      {props.text}
      <AiOutlineArrowRight />
    </button>
  );
}
