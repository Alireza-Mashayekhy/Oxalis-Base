import styled from 'styled-components';
import Chart from 'react-apexcharts';

export const ChartStyle = styled(Chart)`
    .apexcharts-menu {
        background-color: ${({ theme }) => theme.secondary};
        color: ${({ theme }) => theme.textColor};
    }
    svg {
        position: relative;
        top: 0 !important;
    }
`;
