import SimplePageTemplate from '@/components/SimplePageTemplate';
import { SFC } from '@/types';

import MainContent from './MainContent/index';

const UploadPage: SFC = () => {
    return <SimplePageTemplate MainContent={MainContent} />;
};

export default UploadPage;
