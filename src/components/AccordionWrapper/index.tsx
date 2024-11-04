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
    title?: string;
    onChange?: (event: SyntheticEvent, expanded: boolean) => void; // اضافه کردن onChange
}

const AccodionWrapper: SFC<AccordionTypes> = ({
    value,
    setValue,
    tabs,
    children,
    defaultExpanded,
    title,
    onChange, // دریافت onChange
}) => {
    const dispatch = useDispatch();
    const [isExpanded, setIsExpanded] = useState(defaultExpanded || false);

    const handleAccordionChange = (
        event: SyntheticEvent,
        expanded: boolean
    ) => {
        setIsExpanded(expanded);
        dispatch(setAccordionState({ title, isOpen: expanded }));
        if (onChange) {
            // فراخوانی onChange اگر وجود داشته باشد
            onChange(event, expanded);
        }
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
        <div>
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

            <TabPanel tabDetails={tabDetailsChildren} value={value} />
        </div>
    );
};

export default AccodionWrapper;
