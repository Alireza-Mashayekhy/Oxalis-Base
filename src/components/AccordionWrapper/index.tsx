import { SyntheticEvent, useEffect, useState } from 'react';
import { SFC } from '@/types';
import {
    AccordionSummary,
    AccordionDetails,
    Accordion,
    Typography,
} from '@mui/material';
import TabWrapper from '@/components/Tab';
import TabPanel from '@/components/TabPanel';
import PushPinIcon from '@mui/icons-material/PushPin';
import { colors } from '@/styles';
import { v4 as uuidv4 } from 'uuid';
import { getTheme } from '@/selectors/state';
import { useSelector, useDispatch } from 'react-redux';
import { darkTheme, lightTheme } from '@/styles/theme';
import { setAccordionState } from '@/redux/store/accordionTitle';

interface AccordionTypes {
    value: number;
    setValue: (newValue: number) => void;
    tabs: { label: string; value: number; id: number }[];
    children: React.ReactNode[] | string[];
    defaultExpanded?: boolean;
    title: string;
}

const AccodionWrapper: SFC<AccordionTypes> = ({
    value,
    setValue,
    tabs,
    children,
    defaultExpanded,
    title,
}) => {
    const dispatch = useDispatch();
    const [isExpanded, setIsExpanded] = useState(defaultExpanded || false);

    const handleAccordionChange = (
        event: SyntheticEvent,
        isExpanded: boolean
    ) => {
        setIsExpanded(isExpanded);
        dispatch(setAccordionState({ title, isOpen: isExpanded }));
    };

    const handleTabChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
        // Open Accordion when a tab is clicked
        setIsExpanded(true);
        dispatch(setAccordionState({ title, isOpen: true }));
    };

    const theme = useSelector(getTheme);

    const tabDetailsChildren = children.map(
        (item: React.ReactNode | string, index: number) => ({
            children: item,
            value: index,
            id: uuidv4(),
        })
    );

    return (
        <Accordion
            expanded={isExpanded}
            onChange={handleAccordionChange}
            slotProps={{ transition: { unmountOnExit: true } }}
            elevation={0}
            defaultExpanded={defaultExpanded}
            sx={{
                backgroundColor: 'transparent',
                color: colors.white,
            }}
        >
            <AccordionSummary
                expandIcon={
                    <PushPinIcon
                        sx={{
                            color: `${theme === 'dark' ? darkTheme.textColor : lightTheme.textColor}`,
                            fontSize: '1rem',
                        }}
                    />
                }
                sx={{
                    '&.Mui-expanded': {
                        minHeight: '20px',
                        '& > .MuiAccordionSummary-content': {
                            margin: '0',
                            '&.Mui-expanded': {
                                margin: '0',
                            },
                        },
                    },
                    '.MuiAccordionSummary-content': {
                        margin: '0',
                        '&.Mui-expanded': {
                            margin: '0',
                        },
                        overflowX: 'auto',
                    },
                }}
            >
                <TabWrapper
                    value={value}
                    handleTabChange={handleTabChange}
                    tabs={tabs}
                />
                <Typography
                    sx={{
                        position: 'absolute',
                        left: '35px',
                        top: '15px',
                        display: 'flex',
                        fontFamily: 'IRANSans',
                        alignItems: 'center',
                        fontSize: '12px',
                        justifyContent: 'center',
                        color: `${theme === 'dark' ? darkTheme.textColor : lightTheme.textColor}`,
                    }}
                >
                    {title}
                </Typography>
            </AccordionSummary>

            <AccordionDetails
                sx={{
                    padding: 0,
                }}
            >
                <TabPanel tabDetails={tabDetailsChildren} value={value} />
            </AccordionDetails>
        </Accordion>
    );
};

export default AccodionWrapper;
