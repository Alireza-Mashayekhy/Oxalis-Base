import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementCounter, decrementCounter } from '@/dispatchers/counter';
import { RootState,SFC } from '@/types';
import {getSelf, getUsers} from '@/selectors/state';

interface CounterProps {
  id: string;
}

const Counter: SFC<CounterProps> = ({ id }) => {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter[id]);
  const username =  useSelector(getSelf).username;

  if (!counter) {
    return <div>Counter not found</div>;
  }

  const handleIncrement = () => {
    dispatch(incrementCounter(username,id));
  };

  const handleDecrement = () => {
    dispatch(decrementCounter(username,id));
  };

  return (
    <div>
      <h3>{counter.name}</h3>
      <button onClick={handleDecrement}>-</button>
      <span>{counter.value}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Counter;
