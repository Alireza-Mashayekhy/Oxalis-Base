import { SFC } from '@/types';
import MainContent from './MainContent';
import PageTemplate from '@/components/PageTemplate';

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
