import Chart from 'react-apexcharts';
import styled from 'styled-components';

export const ChartStyle = styled(Chart)`
    .apexcharts-menu {
        background-color: ${({ theme }) => theme.secondary};
        color: ${({ theme }) => theme.textColor};
    }
`;
