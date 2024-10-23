import { SFC } from '@/types';
import * as S from './Styles';
import CustomSelectComponent from '@/components/Select';
import { Divider, SelectChangeEvent } from '@mui/material';
import { useEffect, useState } from 'react';
import { getSymbols } from '@/utils/fixedIncomFunctions';
import { oraghfixData } from '@/pages/AssetMap/FixedIncomeFund/MainContent/Watcher/Table/oraghFixedIncome';

import PriceCalculations from './PriceCalculation';
import YTMCalculations from './YTMCalculation';

type symbolState = {
    label: string;
    value: string;
};

const BondCalculations: SFC = () => {
    const [selectedSymbol, setSelectedSymbol] = useState('');
    const [symbolOptions, setSymbolOptions] = useState<symbolState[]>([]);
    const [selectedButton, setSelectedButton] = useState(1);

    useEffect(() => {
        setSymbolOptions(getSymbols(oraghfixData));
    }, []);

    return (
        <S.Container>
            <S.TopContainer>
                <S.SymbolContainer>
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
                </S.SymbolContainer>
                <S.ButtonContainer>
                    <S.Button
                        isSelected={selectedButton === 1}
                        onClick={() => setSelectedButton(1)}
                    >
                        محاسبه قیمت
                    </S.Button>
                    <S.Button
                        isSelected={selectedButton === 2}
                        onClick={() => setSelectedButton(2)}
                    >
                        محاسبه YTM
                    </S.Button>
                </S.ButtonContainer>
            </S.TopContainer>
            <Divider />

            {selectedButton === 1 && <PriceCalculations />}
            {selectedButton === 2 && <YTMCalculations />}
        </S.Container>
    );
};
export default BondCalculations;
