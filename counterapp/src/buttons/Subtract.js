import React from "react";
import { useDispatch } from "react-redux";
import { decreaseCounter } from "../slicers/counterSlicer";

export const Subtract = () => {
  const dispatch = useDispatch();
  return (
    <div className="inline">
      <button onClick={() => dispatch(decreaseCounter())}>-</button>
    </div>
  );
};
