import { Divider, SelectChangeEvent } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import disketteBlack from '@/assets/disketteBlack.png';
import disketteWhite from '@/assets/disketteWhite.png';
import officeBlack from '@/assets/officeBlack.png';
import officeWhite from '@/assets/officeWhite.png';
import CustomSelectComponent from '@/components/Select';
import { getTheme } from '@/selectors/state';
import { SFC } from '@/types';
import { getSymbols } from '@/utils/fixedIncomFunctions';

import { oraghfixData } from '../../Watcher/Table/oraghFixedIncome';
import CashFlowDialog from './Dialog';
import * as S from './Styles';

type symbolState = {
    label: string;
    value: string;
};

const oraghLabels = [
    { label: 'اراد 105', value: 1000000 },
    { label: 'تابات 06', value: 1000000 },
    { label: 'پرشیا07', value: 1000000 },
    { label: 'صبا501', value: 1000000 },
    { label: 'مبین061', value: 1000000 },
];

const CashFlowBtn: SFC = () => {
    const [selectedSymbol, setSelectedSymbol] = useState('');
    const [symbolOptions, setSymbolOptions] = useState<symbolState[]>([]);
    const [open, setOpen] = useState(false);
    const theme = useSelector(getTheme);

    useEffect(() => {
        setSymbolOptions(getSymbols(oraghfixData));
    }, []);

    const handleClick = () => {
        setOpen(true);
    };

    return (
        <>
            <S.OuterFlexContainer>
                <S.SymbolContainerRight>
                    <div>نماد</div>
                    <div>
                        <CustomSelectComponent
                            selectedValue={selectedSymbol}
                            handleChange={(e: SelectChangeEvent<string>) =>
                                setSelectedSymbol(e.target.value as string)
                            }
                            fullWidth={true}
                            padding="8px"
                            placeholder="انتخاب نماد"
                            options={symbolOptions}
                        />
                    </div>
                </S.SymbolContainerRight>

                <S.SymbolContainerLeft>
                    <div>
                        <CustomSelectComponent
                            selectedValue={selectedSymbol}
                            handleChange={(e: SelectChangeEvent<string>) =>
                                setSelectedSymbol(e.target.value as string)
                            }
                            fullWidth={true}
                            padding="8px"
                            placeholder="انتخاب نماد"
                            options={symbolOptions}
                        />
                    </div>
                    <div>
                        {' '}
                        <S.IMG
                            src={
                                theme === 'dark' ? disketteWhite : disketteBlack
                            }
                        />
                    </div>
                </S.SymbolContainerLeft>
            </S.OuterFlexContainer>

            <Divider />

            <S.OuterFlexContainer2>
                <S.RightSidePanel>
                    <S.InnerFlex>
                        <S.HeaderDiv>نام اوراق</S.HeaderDiv>
                        <S.HeaderDiv>تعداد</S.HeaderDiv>
                    </S.InnerFlex>
                    {oraghLabels.map((item, index) => (
                        <S.InnerFlex key={index} onClick={handleClick}>
                            <S.BodyDiv>{item.label}</S.BodyDiv>
                            <S.BodyDiv>{item.value.toLocaleString()}</S.BodyDiv>
                        </S.InnerFlex>
                    ))}
                </S.RightSidePanel>
                <div>
                    <S.SymbolContainerLeft>
                        <div>
                            <S.Button>بارگذاری</S.Button>
                        </div>
                        <div>
                            <S.IMG1
                                src={
                                    theme === 'dark' ? officeWhite : officeBlack
                                }
                            />
                        </div>
                    </S.SymbolContainerLeft>

                    <S.CalculationButtonContainer>
                        <S.Button id="calculationBtn">محاسبه</S.Button>
                    </S.CalculationButtonContainer>
                </div>
            </S.OuterFlexContainer2>
            <CashFlowDialog open={open} setOpen={setOpen} />
        </>
    );
};
export default CashFlowBtn;
