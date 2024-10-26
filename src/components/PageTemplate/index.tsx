import { useState } from 'react';
import { SFC } from '@/types';
import * as S from './Styles';
import Toggler from '@/components/Toggler';
import NewsFeedColumn from '../LeftPannel';

interface TopBarProps {
    isSecondColumnVisible: boolean;
    toggleSecondColumn: () => void;
}

interface PageTemplateProps {
    TopBar?: SFC<TopBarProps>;
    InformativeHeader1?: SFC;
    InformativeHeader2?: SFC;
    InformativeHeader3?: SFC;
    InformativeHeader4?: SFC;
    InformativeHeader5?: SFC;
    InformativeHeader6?: SFC;
    FilterPannel?: SFC;
    ResponsiveFilterPannel?: SFC;
    MainContent?: SFC;
}

const PageTemplate: SFC<PageTemplateProps> = ({
    TopBar,
    InformativeHeader1,
    InformativeHeader2,
    InformativeHeader3,
    InformativeHeader4,
    FilterPannel,
    ResponsiveFilterPannel,
    MainContent,
}) => {
    const [isSecondColumnVisible, setIsSecondColumnVisible] = useState(false);
    const [isFilterColumnVisible, setIsFilterColumnVisible] = useState(false);
    const toggleSecondColumn = () => {
        setIsSecondColumnVisible(!isSecondColumnVisible);
    };
    const toggleFilterColumn = () => {
        setIsFilterColumnVisible(!isFilterColumnVisible);
    };

    return (
        <S.Container>
            <S.FirstColumn>
                <S.FlexContainerFirstRow>
                    <div>{InformativeHeader1 && <InformativeHeader1 />}</div>
                    <div>{InformativeHeader2 && <InformativeHeader2 />}</div>
                    <div>{InformativeHeader3 && <InformativeHeader3 />}</div>
                    <div>{InformativeHeader4 && <InformativeHeader4 />}</div>
                    {/* <div>{InformativeHeader5 && <InformativeHeader5 />}</div>
            <div>{InformativeHeader6 && <InformativeHeader6 />}</div> */}
                </S.FlexContainerFirstRow>
                <S.OperationalRightColumnContainer>
                    {ResponsiveFilterPannel && <ResponsiveFilterPannel />}
                </S.OperationalRightColumnContainer>
                <S.FlexContainerSecondRow>
                    <S.MainColumn isFilterColumnVisible={isFilterColumnVisible}>
                        <S.MainColumnContent>
                            <S.FilterColumn
                                isFilterColumnVisible={isFilterColumnVisible}
                            >
                                <div className="toggleIcon">
                                    <Toggler
                                        isSecondColumnVisible={
                                            isFilterColumnVisible
                                        }
                                        toggleSecondColumn={toggleFilterColumn}
                                    />
                                </div>
                                <S.FilterColumnContent>
                                    {FilterPannel && <FilterPannel />}
                                </S.FilterColumnContent>
                            </S.FilterColumn>

                            {MainContent && <MainContent />}
                        </S.MainColumnContent>
                    </S.MainColumn>
                </S.FlexContainerSecondRow>
            </S.FirstColumn>

            <S.SecondColumn isSecondColumnVisible={isSecondColumnVisible}>
                {/* 5 */}
                <NewsFeedColumn />
                {/* 5 */}

                <S.IconContainer>
                    <Toggler
                        isSecondColumnVisible={isSecondColumnVisible}
                        toggleSecondColumn={toggleSecondColumn}
                    />
                </S.IconContainer>
            </S.SecondColumn>
        </S.Container>
    );
};

export default PageTemplate;
