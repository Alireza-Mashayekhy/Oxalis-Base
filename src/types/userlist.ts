import { UserReadSerializer } from '@/types';

export interface UserListState {
  users: UserReadSerializer[];
  loading: boolean;
  error: string | null;
}

export enum UserListActionTypes {
  GET_ALL_USERS_REQUEST = 'userList/getAllUsersRequest',
  GET_ALL_USERS_SUCCESS = 'userList/getAllUsersSuccess',
  GET_ALL_USERS_FAILURE = 'userList/getAllUsersFailure',
}

export interface GetAllUsersRequestAction {
  type: typeof UserListActionTypes.GET_ALL_USERS_REQUEST;
}

export interface GetAllUsersSuccessAction {
  type: typeof UserListActionTypes.GET_ALL_USERS_SUCCESS;
  payload: UserReadSerializer[];
}

export interface GetAllUsersFailureAction {
  type: typeof UserListActionTypes.GET_ALL_USERS_FAILURE;
  payload: string;
}

export type UserListAction =
  | GetAllUsersRequestAction
  | GetAllUsersSuccessAction
  | GetAllUsersFailureAction;