import BugReportIcon from '@mui/icons-material/BugReport';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import HelpIcon from '@mui/icons-material/Help';
import LightModeIcon from '@mui/icons-material/LightMode';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';

import { setTheme } from '@/redux/store/theme';
import { getTheme } from '@/selectors/state';
import { SFC } from '@/types';

import FocusableIcon from '../../FocusableIcon';
import * as S from './Styles';

const iconList = [
    { name: 'BugReportIcon', icon: BugReportIcon },
    { name: 'HelpIcon', icon: HelpIcon },
    { name: 'NotificationsIcon', icon: NotificationsIcon },
    { name: 'SearchIcon', icon: SearchIcon },
];
const Header: SFC = () => {
    const theme = useSelector(getTheme);
    const dispatch = useDispatch();
    const changeTheme = () => {
        dispatch(setTheme());
    };
    return (
        <S.Container>
            <FocusableIcon
                IconComponent={
                    theme === 'dark' ? LightModeIcon : DarkModeOutlinedIcon
                }
                pr="1rem"
                py="0.5rem"
                iconProps={{ fontSize: 'small' }} // it works with large, small ,.. not by numbers
                onClick={changeTheme}
                theme={theme}
            />
            {iconList.map((icon, index) => (
                <FocusableIcon
                    key={index}
                    IconComponent={icon.icon}
                    pr="1rem"
                    py="0.5rem"
                    iconProps={{ fontSize: 'small' }} // it works with large, small ,.. not by numbers
                    theme={theme}
                />
            ))}
        </S.Container>
    );
};

export default Header;
