import { SelectChangeEvent } from '@mui/material';
import { useState } from 'react';

import defaultAvatar from '@/assets/default-avatar.png';
import CustomSelectComponent from '@/components/Select';
import Toggler from '@/components/Toggler';
import { colors } from '@/styles';
import { SFC } from '@/types';

import { companyNames, yearsValue } from './constantValue';
import * as S from './Styles';

const RightSide: SFC<{
    isSecondColumnVisible: boolean;
    toggleSecondColumn: () => void;
}> = ({ isSecondColumnVisible, toggleSecondColumn }) => {
    const [copanyName, setCompanyName] = useState('');
    const [year, setYear] = useState('');
    return (
        <>
            {/* <S.FlexContainer> */}
            <S.ImageContainer>
                <S.IMG src={defaultAvatar} />
            </S.ImageContainer>
            <S.FlexItem>
                <CustomSelectComponent
                    selectedValue={copanyName}
                    handleChange={(e: SelectChangeEvent<string>) =>
                        setCompanyName(e.target.value as string)
                    }
                    fullWidth={true}
                    placeholder="همه موارد"
                    padding="5px"
                    borderColor={colors.white}
                    options={companyNames}
                />
            </S.FlexItem>
            <S.FlexItem>
                <CustomSelectComponent
                    selectedValue={year}
                    handleChange={(e: SelectChangeEvent<string>) =>
                        setYear(e.target.value as string)
                    }
                    fullWidth={true}
                    padding="5px"
                    placeholder="همه موارد"
                    borderColor={colors.white}
                    options={yearsValue}
                />
            </S.FlexItem>

            <S.Gap />

            {!isSecondColumnVisible && (
                <Toggler
                    isSecondColumnVisible={isSecondColumnVisible}
                    toggleSecondColumn={toggleSecondColumn}
                />
            )}
            {/* </S.FlexContainer> */}
        </>
    );
};

export default RightSide;
