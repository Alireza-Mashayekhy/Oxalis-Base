import { SFC } from '@/types';
import CreateUser from './FilterPannel/CreateUser/index';
import PageTemplate from '@/components/PageTemplate';
import MainContent from './MainContent';

const User: SFC = () => {
    const Contents = [
        {
            Title: '1',
            Content: <MainContent />,
            FilterPannel: CreateUser,
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
            // FilterPannel={CreateUser}
            // ResponsiveFilterPannel={ResponsiveCreateUserPannel}
            MainContent={Contents}
        />
    );
};

export default User;
