import PageTemplate from '@/components/PageTemplate';
import { SFC } from '@/types';

import MainContent from './MainContent';

const Contradiction: SFC = () => {
    const Contents = [
        {
            Title: '1',
            Content: <MainContent />,
        },
    ];
    return <PageTemplate MainContent={Contents} />;
};

export default Contradiction;
