import { SFC } from '@/types';
import MainContent from './MainContent';
import FilterPannel from './FiltersColumn/FilterPannel';
import PageTemplate from '@/components/PageTemplate';

const Options: SFC = () => {
    const Contents = [
        {
            Title: '1',
            Content: <MainContent />,
            FilterPannel: FilterPannel,
        },
    ];
    return (
        <PageTemplate
            // TopBar={TopBar}
            // InformativeHeader1={InformativeHeader1}
            // InformativeHeader2={InformativeHeader2}
            // InformativeHeader3={InformativeHeader3}
            // InformativeHeader4={InformativeHeader4}
            // InformativeHeader5={InformativeHeader5}
            // InformativeHeader6={InformativeHeader6}
            // FilterPannel={FilterPannel}
            // ResponsiveFilterPannel={ResponsiveFilterPannel}
            MainContent={Contents}
        />
    );
};

export default Options;
