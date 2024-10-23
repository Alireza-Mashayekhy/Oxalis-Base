import { SFC } from '@/types';
import GeneralStatusDataGrid from './DataGrid';
import ShareDataGrid from './ShareGrid';
import { v4 as uuidv4 } from 'uuid';
import AccodionWrapper from '@/components/AccordionWrapper';
import DepositeDataGrid from './DepositeGrid';
import BondDataGrid from './BondGrid';
import CashFlowGrid from './CashFlowGrid';
import { useDispatch, useSelector } from 'react-redux';
import { getTabIndex } from '@/selectors/state';
import { setActiveTab } from '@/redux/store/changeTab';
import * as S from './Styles';

const GeneralStatus: SFC = () => {
    const reduxValue = useSelector(getTabIndex);
    const dispatch = useDispatch();

    const handleTabChange = (newValue: number) => {
        dispatch(setActiveTab(newValue));
    };

    return (
        <S.Container>
            <AccodionWrapper
                defaultExpanded={true}
                value={reduxValue}
                setValue={handleTabChange}
                tabs={[
                    { label: 'صندوق‌ها', value: 0, id: uuidv4() },
                    { label: 'سپرده بانکی', value: 1, id: uuidv4() },
                    { label: 'اوراق', value: 2, id: uuidv4() },
                    { label: 'سهام', value: 3, id: uuidv4() },
                    { label: 'جریان نقدی', value: 4, id: uuidv4() },
                ]}
                children={[
                    <GeneralStatusDataGrid />,
                    <DepositeDataGrid />,
                    <BondDataGrid />,
                    <ShareDataGrid />,
                    <CashFlowGrid />,
                ]}
            />
        </S.Container>
    );
};

export default GeneralStatus;
