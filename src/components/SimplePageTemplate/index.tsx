import { SFC } from '@/types';

import * as S from './Styles';

interface TopBarProps {
    isSecondColumnVisible: boolean;
    toggleSecondColumn: () => void;
}

interface PageTemplateProps {
    TopBar?: SFC<TopBarProps>;
    MainContent?: SFC;
}

const SimplePageTemplate: SFC<PageTemplateProps> = ({
    TopBar,
    MainContent,
}) => {
    return <S.Container>{MainContent && <MainContent />}</S.Container>;
};

export default SimplePageTemplate;
