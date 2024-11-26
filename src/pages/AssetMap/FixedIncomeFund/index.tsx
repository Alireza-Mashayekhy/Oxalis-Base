import { SFC } from '@/types';
import TopBar from './TopBar';
import MainContent from './MainContent';
import PageTemplate from '@/components/PageTemplate';

const FixedIncomeFund: SFC = () => {
    const Contents = [
        {
            Title: '1',
            Content: <MainContent />,
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

export default FixedIncomeFund;
