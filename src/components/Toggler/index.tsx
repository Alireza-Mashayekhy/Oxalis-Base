import { mdiTuneVertical } from '@mdi/js';
import UIcon from '@mdi/react';

import { SFC } from '@/types';

import * as S from './Styles';

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
