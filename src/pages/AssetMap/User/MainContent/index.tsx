import { RootState, SFC } from "@/types";
import UserTable from "./UserTable";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserList } from "@/selectors/state"; // Import your getUsers selector
import {
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getAllUsers,
} from "@/dispatchers/user"; // Import your user dispatcher functions

const MainContent: SFC = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => getUserList(state));

  useEffect(() => {
    dispatch(getAllUsers()); // Fetch all users
  }, [dispatch]);

  const handleEditUser = (id: number, type: string) => {
    dispatch(updateUser(id, type));
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
