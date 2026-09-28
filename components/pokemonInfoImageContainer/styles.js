import styled from 'styled-components/native'

export const InfoImageContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    background-color: ${props => props.bgColor};
`;

export const InfoImage = styled.Image`
    width: 250px;
    height: 250px;
`;