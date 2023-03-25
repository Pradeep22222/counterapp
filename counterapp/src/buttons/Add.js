import React from 'react'
import { useDispatch } from 'react-redux';
import { increaseCounter } from '../slicers/counterSlicer';

export const Add = () => {
    const dispatch=useDispatch()
  return (
    <div className="inline">
      <button onClick={()=>dispatch(increaseCounter())}>+</button>
    </div>
  );
}
