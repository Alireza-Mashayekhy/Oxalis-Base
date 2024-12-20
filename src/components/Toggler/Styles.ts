import styled from 'styled-components';

export const IconContainer = styled.div`
    cursor: pointer;
    width: 30px; // Circle size
    height: 30px; // Circle size
    border-radius: 50%; // Makes it a circle
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    color: ${({ theme }) => theme.textColor};
`;
