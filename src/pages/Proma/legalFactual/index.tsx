import { SFC } from '@/types';
import MainContent from './MainContent/index';
import PageTemplate from '@/components/PageTemplate';

const LegalFactual: SFC = () => {
    return <PageTemplate MainContent={MainContent} />;
};

export default LegalFactual;
