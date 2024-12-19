
import * as S from './Styles';

interface TabProps {
    value: number;
    tabs: { value: number; label: string; id: number }[];
    handleTabChange: (event: React.SyntheticEvent, newValue: number) => void;
    orientation?: 'vertical' | 'horizontal';
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const TabWrapper: React.FC<TabProps> = (props) => {
    const { value, handleTabChange, tabs, orientation = 'horizontal' } = props;

    return (
        <S.StyledTabs
            orientation={orientation}
            value={value}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
                '& .MuiTabs-scrollButtons.Mui-disabled': {
                    opacity: 1,
                },
            }}
        >
            {tabs.map((tab) => (
                <S.StyledTab
                    key={tab.id}
                    label={tab.label}
                    value={tab.value}
                    {...a11yProps(tab.value)}
                    onClick={(event) => {
                        event.stopPropagation();
                    }}
                />
            ))}
        </S.StyledTabs>
    );
};

export default TabWrapper;
