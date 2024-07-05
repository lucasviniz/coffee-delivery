import styled from "styled-components";

export const BannerContainer = styled.div`
    display: flex;
    max-width: 1210px;
    margin: auto;
    justify-content: space-between;
    padding: 1rem;
    align-items: center;
`

export const BannerText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const TextItems = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 70px;
    gap: 20px;
    text-decoration: none;
    list-style-type: none;
`

export const TextTitle = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 600px;

    h1{
        font-family: "Baloo 2", sans-serif;
        color: ${props => props.theme["base-title"]};
        font-size: 3rem;
        line-height: 3rem;
    }

    p{
        margin-top: 1rem;
        font-size: 1.3rem;
        color: ${props => props.theme["base-subtitle"]}
    }
`

export const BannerImg = styled.img`
    display: flex;
`