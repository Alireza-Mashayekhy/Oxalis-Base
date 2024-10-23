import { SFC } from '@/types';
import MainContent from './MainContent/index';
import SimplePageTemplate from '@/components/SimplePageTemplate';

const RecordsPage: SFC = () => {
    return <SimplePageTemplate MainContent={MainContent} />;
};

export default RecordsPage;
