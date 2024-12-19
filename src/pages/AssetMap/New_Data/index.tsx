import PageTemplate from '@/components/PageTemplate';
import { SFC } from '@/types';

import FilterPannel from './FiltersColumn/FilterPannel/index';
import InformativeHeader1 from './Header/InformativeHeader1';
import InformativeHeader2 from './Header/InformativeHeader2';
import InformativeHeader3 from './Header/InformativeHeader3';
import InformativeHeader4 from './Header/InformativeHeader4';
import InformativeHeader5 from './Header/InformativeHeader5';
import InformativeHeader6 from './Header/InformativeHeader6';
import MainContent from './MainContent/index';

const NewData: SFC = () => {
    const Contents = [
        {
            Title: '1',
            Content: <MainContent />,
            FilterPannel,
        },
    ];
    return (
        <PageTemplate
            // TopBar={TopBar}
            InformativeHeader1={InformativeHeader1}
            InformativeHeader2={InformativeHeader2}
            InformativeHeader3={InformativeHeader3}
            InformativeHeader4={InformativeHeader4}
            InformativeHeader5={InformativeHeader5}
            InformativeHeader6={InformativeHeader6}
            // InformativeHeader7={InformativeHeader7}
            // FilterPannel={FilterPannel}
            // ResponsiveFilterPannel={ResponsiveFilterPannel}
            MainContent={Contents}
        />
    );
};

export default NewData;
