import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deleteUser, getAllUsers } from '@/dispatchers/user'; // Import your user dispatcher functions
import { getUserList } from '@/selectors/state'; // Import your getUsers selector
import { AppDispatch, RootState, SFC } from '@/types';

import UserTable from './UserTable';

const MainContent: SFC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const users = useSelector((state: RootState) => getUserList(state));

    useEffect(() => {
        dispatch(getAllUsers()); // Fetch all users
    }, [dispatch]);

    const handleEditUser = (id: number, type: string) => {
        // dispatch(updateUser(id, type));
    };

    const handleDeleteUser = (id: number) => {
        dispatch(deleteUser(id));
    };

    return (
        <UserTable
            users={users}
            onEdit={handleEditUser}
            onDelete={handleDeleteUser}
        />
    );
};
export default MainContent;
