import { SFC } from '@/types';
import MainContent from './MainContent/index';
import PageTemplate from '@/components/PageTemplate';

const HomePage: SFC = () => {
    return <PageTemplate MainContent={MainContent} />;
};

export default HomePage;