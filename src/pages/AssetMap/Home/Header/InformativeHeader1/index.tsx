import { AllAssets, SFC } from '@/types';
import * as S from './Styles';
import { colors, fonts } from '@/styles';
import { Label } from '@/components/Label';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import StraightOutlinedIcon from '@mui/icons-material/StraightOutlined';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAssets, getData, getTheme } from '@/selectors/state';
import { useState } from 'react';
import { Data } from '@/types';
import DotsMenu from '@/components/3DotsMenu';
import {
    getFundNameFromAllAssets,
    getSelectedFundNameData,
} from '@/utils/headersFunctions';
import { setSelectedAssets } from '@/redux/store/allassets';

const options: string[] = [
    'سهامی',
    'صندوق در صندوق',
    'نیكوكاری',
    'درآمد ثابت',
    'کالایی',
];

const InformativeHeader1: SFC = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const data: Data[] = useSelector(getData);
    const allassets: AllAssets[] = useSelector(getAllAssets).allAssets;
    const selectedFund: AllAssets =
        useSelector(getAllAssets)?.selectedAsset?.[1];

    const menuOptions = getFundNameFromAllAssets(allassets);
    const dispatch = useDispatch();
    const theme = useSelector(getTheme);
    const handleMenuItemClick = (
        event: React.MouseEvent<HTMLElement>,
        index: number
    ) => {
        setSelectedIndex(index);
        setAnchorEl(null);
        const selectedFund = getSelectedFundNameData(
            allassets,
            menuOptions[index]
        );
        dispatch(setSelectedAssets(selectedFund));
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const chartsData = data
        .filter((item: Data) => item.VENTURE_TYPE === options[selectedIndex])
        .map((item) => ({
            ...item,
            DAY_VALUE: Number(item.DAY_VALUE), // Convert DAY_PRICE from string to number as need for chart
        }));
    return (
        <S.Container>
            <S.HeaderContainer>
                <Label fontWeight={fonts.weight.semiBold}>
                    {selectedFund?.fund}
                </Label>
                <S.MenuContainer>
                    <MoreVertOutlinedIcon onClick={handleClick} />
                    <DotsMenu
                        anchorEl={anchorEl}
                        setAnchorEl={setAnchorEl}
                        options={
                            menuOptions
                                ? menuOptions
                                : ['داده‌ای برای نمایش وجود ندارد']
                        }
                        handleMenuItemClick={handleMenuItemClick}
                    />
                </S.MenuContainer>
            </S.HeaderContainer>

            <S.BodyContainer>
                <div>
                    <Label fontWeight={fonts.weight.semiBold}>4.436B</Label>
                    <Label>
                        12%
                        <StraightOutlinedIcon
                            style={{
                                verticalAlign: 'middle',
                                fontSize: 'inherit',
                                fontWeight: `${fonts.weight.semiBold}`,
                                color: `${colors.palette.green[500]}`,
                            }}
                        />
                    </Label>
                </div>

                <S.ChartContainer>
                    <ResponsiveContainer>
                        <LineChart data={chartsData}>
                            <Line
                                type="linear"
                                dataKey="DAY_VALUE"
                                stroke={theme === 'dark' ? 'white' : 'darkGray'}
                                dot={false}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </S.ChartContainer>
            </S.BodyContainer>
        </S.Container>
    );
};

export default InformativeHeader1;
