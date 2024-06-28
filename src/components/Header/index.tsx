import { HeaderContainer, LocationContainer } from "./styles";
import CoffeeLogo from "../../assets/images/coffee-logo.svg";
import { MapPin } from "@phosphor-icons/react";

export function Header (){
    return (
        <HeaderContainer>
            <img src={CoffeeLogo} alt="" />

            <aside>
                <LocationContainer>
                    <MapPin size={24} weight="fill"/>
                    Porto Alegre, RS
                </LocationContainer>
            </aside>
        </HeaderContainer>
    )
}