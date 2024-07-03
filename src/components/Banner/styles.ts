import styled from "styled-components";

export const BannerContainer = styled.div`
    display: flex;
    max-width: 1210px;
    margin: auto;
    justify-content: center;
    padding: 1rem;
    align-items: center;
`

export const BannerText = styled.div`
    display: flex;
    align-items: center;
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

    h1{
        font-family: "Baloo 2", sans-serif;
        color: ${props => props.theme["base-title"]};
        font-size: 3.5rem;
    }

    p{
        font-size: 1.5rem;
        color: ${props => props.theme["base-subtitle"]}
    }
`

export const BannerImg = styled.img`
    display: flex;
    width: 900px;
`