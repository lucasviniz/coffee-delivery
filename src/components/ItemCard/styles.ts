import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    max-width: 260px;
    border-radius: 15px;
    border-top-right-radius: 40px;
    border-bottom-left-radius: 40px;
    background-color: ${props => props.theme["base-card"]};
    flex-direction: column;
    padding: 1.5rem;
    align-items: center;
    

    img{
        width: 150px;
    }
`

export const CardContent= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
    bottom: 60px;

    span{
        color: ${props => props.theme["yellow-dark"]};
        font-size: 0.70rem;
        line-height: 0.5rem;
        padding: 0.5rem;
        font-weight: bold;
        border-radius: 20px;
        background-color: ${props => props.theme["yellow-light"]};
    }
`

export const PriceContainer = styled.div`
    strong{
        font-size: 1.8rem;
        font-family: "Baloo 2", sans-serif;
    }
`

export const CardFooter = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`