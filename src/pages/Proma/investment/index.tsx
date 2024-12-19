import SimplePageTemplate from '@/components/SimplePageTemplate';
import { SFC } from '@/types';

import MainContent from './MainContent/index';

const MainContainer: SFC = () => {
    return <SimplePageTemplate MainContent={MainContent} />;
};

export default MainContainer;
