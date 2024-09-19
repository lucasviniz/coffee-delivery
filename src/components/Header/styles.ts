import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    padding: 1rem;
    justify-content: space-between;
    margin: auto;
    max-width: 1210px;
`

export const LocationContainer = styled.div`
    display: flex;
    background-color: ${props => props.theme["purple-light"]};
    border-radius: 5px;
    color: ${props => props.theme["purple-dark"]};
    justify-content: center;
    align-items: center;
    gap: 3px;
    padding: 0.5rem;

    svg{
       color: ${props => props.theme["purple"]}; 
    }
`

export const OrderCartButton = styled.button`
    border: 0;
    border-radius: 10px;
    background-color: ${props => props.theme["yellow-light"]};
    padding: 0.5rem;

`

export const AsideContainer = styled.aside`
    display: flex;
    gap: 10px;
`