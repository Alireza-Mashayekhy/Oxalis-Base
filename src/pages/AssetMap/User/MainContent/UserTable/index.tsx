import BeenhereIcon from '@mui/icons-material/Beenhere';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Column } from 'primereact/column';
import { useState } from 'react';

import CustomSelectComponent from '@/components/Select';
import { colors } from '@/styles';
import {SFC, UserReadSerializer } from '@/types';

import { jsonUsers } from '../../users';
import * as S from './Styles';
// import "./userDataTable.css";

interface UserTableProps {
    users: UserReadSerializer[];
    onEdit: (id: number, userType: string) => void;
    onDelete: (id: number) => void;
}

const menuItems = [
    { label: 'Regular' },
    { label: 'Admin' },
    { label: 'Operator' },
];
const userTypeOptions = [
    { value: 'admin', label: 'ادمین' },
    { value: 'user', label: 'کاربر عادی' },
    { value: 'operator', label: 'اپراتور' },
];
const UserTable: SFC<UserTableProps> = ({ onEdit, onDelete }) => {
    // const [users, setUsers] = useState([]);
    // useEffect(() => {
    //   setUsers(jsonUsers);
    // }, []);
    // Access users array from the nested object

    // Access users array from the nested object
    //const users = useSelector((state: RootState) => getUserList(state));
    const [editUserId, setEditUserId] = useState<number | null>(null);
    const [newUserType, setNewUserType] = useState<string>('');
    const [anchorEl, setAnchorEl] = useState(null);

    const [editMode, setEditMode] = useState(false);

    const [userTypeValue, setUserTypeValue] = useState('admin');
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    // if (!users || users.length === 0) {
    //   return <div>No users available</div>; // Handle case when users array is empty or undefined
    // }
    const openEditModal = (id: number, type: string) => {
        setEditUserId(id);
        setNewUserType(type);
    };

    const closeEditModal = () => {
        setEditUserId(null);
        setNewUserType('');
    };
    const handleEditMode = () => {
        setEditMode(!editMode);
    };
    const handleEditComplete = () => {
        setEditMode(false);
    };

    const handleDelete = (id: number) => {
        onDelete(id);
    };

    const handleSubmit = () => {};

    const operation = () => {
        return (
            <>
                <S.OperationContainer>
                    {editMode && (
                        // <Dropdown
                        //   value={userTypeValue}
                        //   onChange={(e) => setUserTypeValue(e.value)}
                        //   options={userTypeOptions}
                        //   variant="filled"
                        //   optionLabel="displayName"
                        // />

                        <CustomSelectComponent
                            selectedValue={userTypeValue}
                            handleChange={(e) =>
                                setUserTypeValue(e.target.value as string)
                            }
                            options={userTypeOptions}
                            padding="5px"
                        />
                    )}
                    {!editMode && (
                        <S.Button
                            onClick={handleEditMode}
                            // onClick={() => openEditModal(user.id, user.user_type)}
                        >
                            <EditIcon
                                sx={{ color: colors.palette.blue[200] }}
                            />
                        </S.Button>
                    )}
                    <S.Button onClick={handleEditComplete}>
                        <BeenhereIcon
                            sx={{ color: colors.palette.green[200] }}
                        />
                    </S.Button>
                    <S.Button onClick={handleClick}>
                        <DeleteIcon sx={{ color: colors.palette.red[200] }} />
                    </S.Button>
                </S.OperationContainer>
            </>
        );
    };
    const columnFields = [
        {
            field: 'id',
            header: '',
            width: '5%',
        },
        {
            field: 'username',
            header: 'نام کاربری',
            width: '20%',
        },
        {
            field: 'user_type',
            header: 'نوع کاربر',
            width: '20%',
        },
    ];

    return (
        <S.TableContainer>
            <S.StyledDataTable
                value={jsonUsers}
                className="p-datatable-custom"
                tableStyle={{
                    minWidth: '30rem',
                }}
            >
                {columnFields.map((col, index) => (
                    <Column
                        key={index}
                        field={col.field}
                        header={col.header}
                        style={{ width: `${col.width}` }}
                    />
                ))}
                <Column
                    header="عملیات"
                    body={operation}
                    style={{ width: '30%' }}
                />
            </S.StyledDataTable>
        </S.TableContainer>
    );
};

export default UserTable;
