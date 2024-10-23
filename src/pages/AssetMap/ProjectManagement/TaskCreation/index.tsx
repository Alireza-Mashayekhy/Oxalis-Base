import React, { useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { createTask } from '@/dispatchers/task'; // Import createTask dispatcher
import { SFC ,User} from '@/types';
import { getAllUsersExceptCurrent } from '@/api/user'; 
const TaskCreationComponent: SFC = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user);
  const [users, setUsers] = useState<User[]>([]);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState<Date | null>(null);
  useEffect(() => {
    // Fetch all users except the current user
    async function fetchUsers() {
      
      try {
        
        const users = await getAllUsersExceptCurrent(currentUser.id);
        setUsers(users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }

    fetchUsers();
  }, [currentUser.id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && date) {
      dispatch(createTask({ title, date }));
      setTitle('');
      setDate(null);
    }
  };

  return (
    <div>
      <h2>Create New Task</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Task Title" />
        <input type="date" value={date} onChange={(e) => setDate(new Date(e.target.value))} />
        <div>
          <label>Assign to:</label>
          <ul>
            {users.map(user => (
              <li key={user.id}>
                <input type="checkbox" value={user.id} /> {user.username}
              </li>
            ))}
          </ul>
        </div>
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
};
export default TaskCreationComponent;