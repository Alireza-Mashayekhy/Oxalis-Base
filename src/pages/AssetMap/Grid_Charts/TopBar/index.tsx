import { SFC } from '@/types';
import * as S from './Styles';
import { companyNames, yearsValue } from './constantValue';
import CustomSelectComponent from '@/components/Select';
import { useState } from 'react';
import { SelectChangeEvent } from '@mui/material';
import Toggler from '@/components/Toggler';
import defaultAvatar from '@/assets/default-avatar.png';
import { colors } from '@/styles';

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
