import { useLocation } from 'react-router-dom';

import { SFC } from '@/types';

import * as S from './Styles';

export interface MenuLinkProps {
    icon: string;
    rootPath: string;
    text: string;
    to: string;
    width: string;
}

const MenuLink: SFC<MenuLinkProps> = ({
    className,
    icon,
    rootPath,
    text,
    to,
    width,
}) => {
    const location = useLocation();

    return (
        <S.MenuLinkContainer>
            <S.MenuLink
                $isActive={location.pathname.includes(rootPath)}
                className={className}
                to={to}
                $width={width}
            >
                <S.LinkIcon path={icon} size="26px" />
                <S.MenuLinkText>{text}</S.MenuLinkText>
            </S.MenuLink>
        </S.MenuLinkContainer>
    );
};

export default MenuLink;
