import { Box, Paper, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import BarChart from '@/components/BarChart';
import { SFC } from '@/types';
import { filterBaseOnBankDeposite } from '@/utils/chartsFunctions';

import jsonData from '../../Part1/chartData.json';

const EnvironmentLawsAndIssuesChart: SFC = () => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        setChartData(filterBaseOnBankDeposite(jsonData));
    }, []);

    return (
        <>
            <div style={{ marginTop: '10%' }}>
                <BarChart
                    labels={['test']}
                    datasets={[{ name: 'test', data: [2, 3] }]}
                />
            </div>
        </>
    );
};

export default EnvironmentLawsAndIssuesChart;

const customTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <Paper
                sx={{
                    textAlign: 'left',
                    py: 1,
                    px: 2,
                    fontFamily: 'IRANSans',
                }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Typography
                        // variant="span"
                        sx={{
                            fontSize: '12px',
                            fontWeight: 500,
                            pt: 1,
                            mr: 2,
                            mb: 1,
                            color: 'black',
                            fontFamily: 'IRANSans',
                        }}
                    >
                        نام صندوق
                    </Typography>
                    <Typography
                        // variant="span"
                        sx={{
                            fontSize: '12px',
                            fontWeight: 500,
                            pt: 1,
                            mb: 1,
                            color: 'black',
                            fontFamily: 'IRANSans',
                        }}
                    >
                        : {payload[0].payload.name}
                    </Typography>
                </Box>
                <Typography
                    sx={{
                        fontSize: '12px',
                        fontWeight: 500,
                        pt: 1,
                        mb: 1,
                        color: '#09797b',
                        textAlign: 'center',
                        fontFamily: 'IRANSans',
                    }}
                >
                    سپرده کوتاه مدت (ریال)
                </Typography>
                <Typography
                    sx={{
                        fontSize: '12px',
                        fontWeight: 700,
                        pt: 1,
                        mb: 1,
                        color: 'black',
                        textAlign: 'center',
                        fontFamily: 'IRANSans',
                    }}
                >
                    {payload[0].payload.shortTerm
                        ? payload[0].payload.shortTerm.toLocaleString('en-US')
                        : 0}
                </Typography>

                <Typography
                    sx={{
                        fontSize: '12px',
                        fontWeight: 500,
                        pt: 1,
                        mb: 1,
                        color: '#4cbba2',
                        textAlign: 'center',
                        fontFamily: 'IRANSans',
                    }}
                >
                    سپرده بلند مدت (ریال)
                </Typography>
                <Typography
                    sx={{
                        fontSize: '12px',
                        fontWeight: 700,
                        pt: 1,
                        mb: 1,
                        color: 'black',
                        textAlign: 'center',
                        fontFamily: 'IRANSans',
                    }}
                >
                    {payload[0].payload.longTerm
                        ? payload[0].payload.longTerm.toLocaleString('en-US')
                        : 0}
                </Typography>

                <Typography
                    sx={{
                        fontSize: '12px',
                        fontWeight: 500,
                        pt: 1,
                        mb: 1,
                        color: '#f3931d',
                        // color: theme.palette.secondary.main,
                        textAlign: 'center',
                        fontFamily: 'IRANSans',
                    }}
                >
                    جاری (ریال)
                </Typography>
                <Typography
                    sx={{
                        fontSize: '14px',
                        fontWeight: 700,
                        pt: 1,
                        color: 'black',
                        textAlign: 'center',
                        fontFamily: 'IRANSans',
                    }}
                >
                    {payload[0].payload.checking
                        ? payload[0].payload.checking.toLocaleString('en-US')
                        : 0}
                </Typography>
            </Paper>
        );
    }

    return null;
};
