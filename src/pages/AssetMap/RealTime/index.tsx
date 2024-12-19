import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadCounters } from '@/dispatchers/counter';
import { AppDispatch, RootState } from '@/types';
import { SFC } from '@/types';

import Counter from './Counter';
import EventLog from './Event';

const RealTime: SFC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const counters = useSelector(
        (state: RootState) => state.counter.countersList
    );

    useEffect(() => {
        dispatch(loadCounters());
    }, [dispatch]);

    return (
        <div>
            {counters.map((counter) => (
                <Counter key={counter.id} id={counter.id} />
            ))}
            <EventLog />
        </div>
    );
};

export default RealTime;
