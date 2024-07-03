import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { BannerContainer, BannerImg, BannerText, TextItems, TextTitle } from "./styles";
import BannerLogo from "../../assets/images/coffee-image.svg"

export function Banner() {
    return (
        <BannerContainer>

            <BannerText>
                <TextTitle>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                </TextTitle>
                <TextItems>
                    <li><ShoppingCart/> Compra simples e segura</li>
                    <li><Package/> Embalagem mantém o café intacto</li>
                    <li><Timer/> Entrega rápida e rastreada</li>
                    <li><Coffee/> O café chega fresquinho até você</li>
                </TextItems>
            </BannerText>


            <BannerImg src={BannerLogo}/>



        </BannerContainer>
    )
}