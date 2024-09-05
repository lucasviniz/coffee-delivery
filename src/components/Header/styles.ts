import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    padding: 1rem;
    justify-content: space-between;
    border-bottom: 1px solid black;
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