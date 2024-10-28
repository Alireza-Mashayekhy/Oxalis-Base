import {
    createUser as _createUser,
    getUser as _getUser,
    updateUser as _updateUser,
    deleteUser as _deleteUser,
    getAllUsers as _getAllUsers,
} from '@/api/user';
import { setAuthentication } from '@/redux/store/authentication';
import { setSelf } from '@/redux/store/self';
import { setUser } from '@/redux/store/user';
import {
    getAllUsersRequest,
    getAllUsersSuccess,
    getAllUsersFailure,
} from '@/redux/store/userList';
import { AppDispatch, CreateUserRequest, UserReadSerializer } from '@/types';

// Action to create a new user
export const createUser =
    (data: CreateUserRequest) => async (dispatch: AppDispatch) => {
        try {
            const responseData = await _createUser(data);

            const {
                authentication: { access_token, refresh_token },
                user,
            } = responseData;

            // dispatch(setSelf(user));

            return user;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

// Action to get user by ID
export const getUser = (id: number) => async (dispatch: AppDispatch) => {
    try {
        const responseData = await _getUser(id);
        dispatch(setUser(responseData));
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Action to update user by ID
// export const updateUser =
//     (id: number, data: FormData) => async (dispatch: AppDispatch) => {
//         try {
//             console.log(typeof data);
//             const responseData = await _updateUser(id, data);
//             dispatch(setSelf(responseData));
//         } catch (error) {
//             console.error(error);
//             throw error;
//         }
//     };
export const getAllUsers = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(getAllUsersRequest());
        const users = await _getAllUsers();
        dispatch(getAllUsersSuccess(users));
    } catch (error) {
        dispatch(getAllUsersFailure(error.message));
    }
};

// Action to delete user by ID
export const deleteUser = (id: number) => async (dispatch: AppDispatch) => {
    try {
        // Call the API function to delete the user
        await _deleteUser(id);
        // Dispatch an action to remove the user from the store
        dispatch(removeUser(id));
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Action to remove user from the store
const removeUser = (id: number) => ({
    type: 'users/removeUser',
    payload: id,
});
