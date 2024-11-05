import { useState } from 'react';
import { SFC } from '@/types';
import * as S from './Styles';
import Toggler from '@/components/Toggler';
import NewsFeedColumn from '../LeftPannel';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';

interface ContentType {
    Title: string;
    FilterPannel?: SFC;
    Content?: JSX.Element | SFC;
}

interface PageTemplateProps {
    InformativeHeader1?: SFC;
    InformativeHeader2?: SFC;
    InformativeHeader3?: SFC;
    InformativeHeader4?: SFC;
    InformativeHeader5?: SFC;
    InformativeHeader6?: SFC;
    ResponsiveFilterPannel?: SFC;
    MainContent?: ContentType[];
}

const PageTemplate: SFC<PageTemplateProps> = ({
    InformativeHeader1,
    InformativeHeader2,
    InformativeHeader3,
    InformativeHeader4,
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
    const [expanded, setExpanded] = useState<string | false>('panel0');

    const handleChange =
        (panel: string) =>
        (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(panel);
        };
    const renderContent = (content: JSX.Element | SFC | undefined) => {
        if (typeof content === 'function') {
            const ContentComponent = content;
            return <ContentComponent />;
        }
        return content;
    };
    return (
        <S.Container>
            <S.FirstColumn>
                <S.FlexContainerFirstRow>
                    <div>{InformativeHeader1 && <InformativeHeader1 />}</div>
                    <div className="other">
                        <div>
                            {InformativeHeader2 && <InformativeHeader2 />}
                        </div>
                        <div>
                            {InformativeHeader3 && <InformativeHeader3 />}
                        </div>
                        <div>
                            {InformativeHeader4 && <InformativeHeader4 />}
                        </div>
                    </div>
                </S.FlexContainerFirstRow>
                <S.OperationalRightColumnContainer>
                    {ResponsiveFilterPannel && <ResponsiveFilterPannel />}
                </S.OperationalRightColumnContainer>
                {MainContent?.length > 1 ? (
                    <S.AccordionContainer>
                        {MainContent.map((e, index) => {
                            return (
                                <div className="relative overflow-hidden">
                                    <Accordion
                                        expanded={expanded === `panel${index}`}
                                        onChange={handleChange(`panel${index}`)}
                                    >
                                        <AccordionSummary>
                                            {e.Title}
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            {renderContent(e.Content)}
                                        </AccordionDetails>
                                    </Accordion>
                                    {e.FilterPannel && (
                                        <S.FilterColumn
                                            isFilterColumnVisible={
                                                isFilterColumnVisible
                                            }
                                        >
                                            <div className="toggleIcon">
                                                <Toggler
                                                    isSecondColumnVisible={
                                                        isFilterColumnVisible
                                                    }
                                                    toggleSecondColumn={
                                                        toggleFilterColumn
                                                    }
                                                />
                                            </div>
                                            <S.FilterColumnContent>
                                                {e.FilterPannel && (
                                                    <e.FilterPannel />
                                                )}
                                            </S.FilterColumnContent>
                                        </S.FilterColumn>
                                    )}
                                </div>
                            );
                        })}
                    </S.AccordionContainer>
                ) : (
                    MainContent &&
                    MainContent[0] && (
                        <S.SingleMainContainer>
                            {renderContent(MainContent[0].Content)}
                        </S.SingleMainContainer>
                    )
                )}
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
