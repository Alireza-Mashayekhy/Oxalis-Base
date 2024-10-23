import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/types';
import { loadCounters } from '@/dispatchers/counter';
import Counter from './Counter';
import EventLog from './Event';
import {SFC} from '@/types';

const RealTime: SFC = () => {
  const dispatch = useDispatch();
  const counters = useSelector((state: RootState) => state.counter.countersList);

  useEffect(() => {
    dispatch(loadCounters());
  }, [dispatch]);

  return (
    <div>
      {counters.map(counter => (
        <Counter key={counter.id} id={counter.id} />
      ))}
      <EventLog />
    </div>
  );
};

export default RealTime;