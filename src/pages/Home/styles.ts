import styled from "styled-components";

export const HomeContainer = styled.div`
    h2{
        font-family: "Baloo 2", sans-serif;
        font-weight: bold;
    }
`

export const ContentContainer = styled.div`
    padding: 1rem;
    margin: auto;
    max-width: 1210px;
    h2 {
        font-weight: bold;
        color: ${props => props.theme["base-subtitle"]};
        font-size: 2rem;
        padding-bottom: 3rem;
    }
`


export const CoffeeList = styled.div`
    display: flex;
    gap: 50px;
    justify-content: space-between;
    flex-wrap: wrap;
`