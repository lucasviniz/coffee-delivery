import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { BannerContainer, BannerImg, BannerItem, BannerText, ItemsContainer, TextItems, TextTitle } from "./styles";
import BannerLogo from "/images/coffee-image.svg"
import { useTheme } from "styled-components";

export function Banner() {
    const theme = useTheme();

    return (
        <BannerContainer>

            <BannerText>
                <TextTitle>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                </TextTitle>

                <ItemsContainer>
                    <TextItems>
                        <BannerItem>
                            <ShoppingCart size={30} weight="fill" style={{backgroundColor : theme["yellow-dark"] }}/>
                            Compra simples e segura
                        </BannerItem>

                        <BannerItem>
                            <Timer size={30} weight="fill" style={{backgroundColor : theme.yellow }}/>
                            Entrega rápida e rastreada
                        </BannerItem>
                    </TextItems>

                    <TextItems>
                        
                        <BannerItem>
                            <Package size={30} weight="fill" style={{backgroundColor : theme["base-text"] }}/>
                            Embalagem mantém o café intacto
                        </BannerItem>

                        <BannerItem>
                            <Coffee size={30} weight="fill" style={{backgroundColor : theme.purple }}/>
                            O café chega fresquinho até você
                        </BannerItem>
                    </TextItems>
                </ItemsContainer>
                
            </BannerText>


            <BannerImg src={BannerLogo}/>



        </BannerContainer>
    )
}