import { SFC } from '@/types';
import TopBar from './TopBar';
import MainContent from './MainContent';
import PageTemplate from '@/components/PageTemplate';

const Contradiction: SFC = () => {
    return <PageTemplate TopBar={TopBar} MainContent={MainContent} />;
};

export default Contradiction;
