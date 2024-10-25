import { SFC } from '@/types';
import * as S from './Styles';
import PushPinIcon from '@mui/icons-material/PushPin';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import UIcon from '@mdi/react';
import { mdiTuneVertical } from '@mdi/js';

const Toggler: SFC<{
    isSecondColumnVisible: boolean;
    toggleSecondColumn: () => void;
}> = ({ isSecondColumnVisible, toggleSecondColumn }) => {
    return (
        <S.IconContainer onClick={toggleSecondColumn}>
            <UIcon path={mdiTuneVertical} size="20px" />
        </S.IconContainer>
    );
};

export default Toggler;
