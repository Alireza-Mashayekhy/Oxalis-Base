import { SFC } from '@/types';
import FilterPannel from './FiltersColumn/FilterPannel/index';
import InformativeHeader1 from './Header/InformativeHeader1';
import InformativeHeader2 from './Header/InformativeHeader2';
import InformativeHeader3 from './Header/InformativeHeader3';
import InformativeHeader4 from './Header/InformativeHeader4';
import InformativeHeader5 from './Header/InformativeHeader5';
import ResponsiveFilterPannel from './FiltersColumn/ResponsiveFilterPannel';
import InformativeHeader6 from './Header/InformativeHeader6';
import PageTemplate from '@/components/PageTemplate';
import GeneralStatus from './MainContent/Part1';
import OrderStatus from './MainContent/Part2';
import EnvironmentLawsAndIssues from './MainContent/Part3';

const MainContainer: SFC = () => {
    const Contents = [
        {
            Title: 'گزارش دارایی‌ها',
            Content: <GeneralStatus />,
            FilterPannel: FilterPannel,
        },
        {
            Title: '2',
            Content: <OrderStatus />,
        },
        {
            Title: '3',
            Content: <EnvironmentLawsAndIssues />,
        },
    ];

    return (
        <PageTemplate
            InformativeHeader1={InformativeHeader1}
            InformativeHeader2={InformativeHeader2}
            InformativeHeader3={InformativeHeader3}
            InformativeHeader4={InformativeHeader4}
            InformativeHeader5={InformativeHeader5}
            InformativeHeader6={InformativeHeader6}
            ResponsiveFilterPannel={ResponsiveFilterPannel}
            MainContent={Contents}
        />
    );
};

export default MainContainer;
