import {
    createCounter,
    deleteCounter,
    fetchCounters,
    updateCounter,
} from '@/api/counter';
import { getEvents,logEvent } from '@/api/event';
import {
    addCounter,
    decrement,
    deleteCounter as deleteCounterAction,
    increment,
    setCounters,
    updateCounter as updateCounterAction,
} from '@/redux/store/counter';
import { addEvent, setEvents } from '@/redux/store/event';
import { AppDispatch, RootState } from '@/types';
import {Event } from '@/types';

export const loadCounters = () => async (dispatch: AppDispatch) => {
    const counters = await fetchCounters();
    dispatch(setCounters(counters));
};

export const addNewCounter =
    (name: string, value: number) => async (dispatch: AppDispatch) => {
        const counter = await createCounter({ name, value });
        dispatch(addCounter(counter));
    };

export const modifyCounter =
    (id: string, name: string, value: number) =>
    async (dispatch: AppDispatch) => {
        const counter = await updateCounter(id, { name, value });
        dispatch(updateCounterAction(counter));
    };

export const removeCounter = (id: string) => async (dispatch: AppDispatch) => {
    await deleteCounter(id);
    dispatch(deleteCounterAction(id));
};

export const incrementCounter =
    (username: string, id: string) =>
    async (dispatch: AppDispatch, getState: () => RootState) => {
        const { counter } = getState();
        const counters = counter[id];
        if (!counters) return;

        dispatch(increment(id));
        const event: Event = {
            counterId: id,
            counter_name: counters.name,
            type: 'increment',
            user_name: username || 'Unknown',
            datetime: new Date().toISOString(),
        };
        await logEvent(event);
        dispatch(addEvent(event));
    };

export const decrementCounter =
    (username: string, id: string) =>
    async (dispatch: AppDispatch, getState: () => RootState) => {
        const { counter } = getState();
        const counters = counter[id];
        if (!counters) return;

        dispatch(decrement(id));
        const event: Event = {
            counterId: id,
            counter_name: counters.name,
            type: 'decrement',
            user_name: username || 'Unknown',
            datetime: new Date().toISOString(),
        };
        await logEvent(event);
        dispatch(addEvent(event));
    };

export const fetchEvents = () => async (dispatch: AppDispatch) => {
    const events = await getEvents();
    dispatch(setEvents(events));
};
