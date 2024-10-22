import { useLocation } from 'react-router-dom';

import { SFC } from '@/types';
import * as S from './Styles';

export interface MenuLinkProps {
    icon: string;
    rootPath: string;
    text: string;
    to: string;
}

const MenuLink: SFC<MenuLinkProps> = ({
    className,
    icon,
    rootPath,
    text,
    to,
}) => {
    const location = useLocation();

    return (
        <div>
            <S.MenuLink
                $isActive={location.pathname.includes(rootPath)}
                className={className}
                to={to}
            >
                <S.Icon path={icon} size="26px" />
            </S.MenuLink>
        </div>
    );
};

export default MenuLink;
