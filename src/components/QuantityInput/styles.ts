import styled from "styled-components";

export const QuantityInputContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: ${props => props.theme["base-button"]};
    padding: 5px;
    border-radius: 5px;
    gap: 5px;
    
    button{
        display: flex;
        border: 0;
        padding: 2px;
        background: none;
        color: ${props => props.theme.purple};
    }
`