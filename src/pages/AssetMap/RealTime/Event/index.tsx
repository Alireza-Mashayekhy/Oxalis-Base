import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '@/dispatchers/counter';
import { RootState,SFC } from '@/types';

const EventLog: SFC = () => {
  const dispatch = useDispatch();
  const events = useSelector((state: RootState) => state.event);

  useEffect(() => {
    dispatch(fetchEvents());
    // setupWebSocket();
  }, [dispatch]);

  return (
    <div>
      <h3>Event Log</h3>
      <table>
        <thead>
          <tr>
            <th>Counter</th>
            <th>Action</th>
            <th>User</th>
            <th>Datetime</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={index}>
              <td>{event.counter_name}</td>
              <td>{event.type}</td>
              <td>{event.user_name}</td>
              <td>{event.datetime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventLog;