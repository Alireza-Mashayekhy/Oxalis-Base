import { SFC } from '@/types';

import * as S from './Styles';

export interface MenuButtonProps {
    icon: string;
    onClick?: () => void;
    text: string;
    width: string;
}

const MenuButton: SFC<MenuButtonProps> = ({
    className,
    icon,
    onClick,
    text,
    width,
}) => {
    return (
        <div>
            <S.MenuButton
                $isActive={false}
                className={className}
                onClick={onClick}
                $width={width}
            >
                <S.Icon path={icon} size="26px" />
                {text}
            </S.MenuButton>
        </div>
    );
};

export default MenuButton;
