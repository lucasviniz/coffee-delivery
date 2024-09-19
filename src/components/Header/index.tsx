import { useTheme } from "styled-components";
import { AsideContainer, HeaderContainer, LocationContainer, OrderCartButton } from "./styles";
import CoffeeLogo from "/images/coffee-logo.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";

export function Header (){
    const theme = useTheme()
    return (
        <HeaderContainer>
            <img src={CoffeeLogo} alt="" />

            <AsideContainer>
                <LocationContainer>
                    <MapPin size={24} weight="fill"/>
                    Porto Alegre, RS
                </LocationContainer>

                <OrderCartButton>
                    <ShoppingCart size={24} weight="fill" color={theme["yellow-dark"]}/>
                </OrderCartButton>
            </AsideContainer>
        </HeaderContainer>
    )
}