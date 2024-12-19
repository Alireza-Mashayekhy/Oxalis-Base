import { useDispatch, useSelector } from 'react-redux';

import { decrementCounter,incrementCounter } from '@/dispatchers/counter';
import { getSelf } from '@/selectors/state';
import { AppDispatch, RootState, SFC } from '@/types';

interface CounterProps {
    id: string;
}

const Counter: SFC<CounterProps> = ({ id }) => {
    const dispatch = useDispatch<AppDispatch>();
    const counter = useSelector((state: RootState) => state.counter[id]);
    const {username} = useSelector(getSelf);

    if (!counter) {
        return <div>Counter not found</div>;
    }

    const handleIncrement = () => {
        dispatch(incrementCounter(username, id));
    };

    const handleDecrement = () => {
        dispatch(decrementCounter(username, id));
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
