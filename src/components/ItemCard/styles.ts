import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 256px;
    border-radius: 15px;
    border-top-right-radius: 40px;
    border-bottom-left-radius: 40px;
    background-color: ${props => props.theme["base-card"]};
    padding: 1rem;
`

export const CardImg = styled.img`
    display: flex;
    justify-content: center;
    max-width: 150px;
    margin-top: -50px;
`

export const Tags = styled.div`
    display: flex;
    gap: 5px;
    margin-block: 5px 20px;
`

export const CardContent= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-bottom: 25px;
    span{
        color: ${props => props.theme["yellow-dark"]};
        font-size: 0.70rem;
        line-height: 0.5rem;
        padding: 0.5rem;
        font-weight: bold;
        border-radius: 20px;
        background-color: ${props => props.theme["yellow-light"]};
    }
    h3{
        font-family: "Baloo 2", sans-serif;
        font-size: 1.3rem;
    }
    p{
        margin-top: 5px;
        font-size: 0.875rem;
        color: ${props => props.theme["base-label"]};
    }
`

export const PriceContainer = styled.div`
    span{
        font-size: 0.875rem;
    }
    strong{
        font-size: 1.5rem;
        font-family: "Baloo 2", sans-serif;
    }
`

export const CardFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-left: 10px;
`

export const CardButton = styled.button`
    cursor: pointer;
    display: flex;
    border-radius: 5px;
    border: 0;
    padding: 8px;
    background-color: ${props => props.theme["purple-dark"]};
`
export const OrderContainer = styled.div`
    display: flex;
    gap: 10px;
`