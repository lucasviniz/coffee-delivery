import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { BannerContainer, BannerImg, BannerText, TextItems, TextTitle } from "./styles";
import BannerLogo from "../../assets/images/coffee-image.svg"
import { BannerItem } from "../BannerItem";

export function Banner() {
    return (
        <BannerContainer>

            <BannerText>
                <TextTitle>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                </TextTitle>
                <TextItems>
                    <BannerItem Icon={ShoppingCart} text="Compra simples e segura"/>
                    <BannerItem Icon={Package} text="Embalagem mantém o café intacto"/>
                    <BannerItem Icon={Timer} text="Entrega rápida e rastreada"/>
                    <BannerItem Icon={Coffee} text="O café chega fresquinho até você"/>
                    {/* <li><ShoppingCart/> Compra simples e segura</li> */}
                    {/* <li><Package/> Embalagem mantém o café intacto</li>
                    <li><Timer/> Entrega rápida e rastreada</li>
                    <li><Coffee/> O café chega fresquinho até você</li> */}
                </TextItems>
            </BannerText>


            <BannerImg src={BannerLogo}/>



        </BannerContainer>
    )
}