import { Card, CardContainer, CardContent, CardFooter, ImageContainer, PriceContainer, Tags } from "./styles";
import CoffeeImg from "../../assets/images/coffee/Coffee-1.svg"
import { ShoppingCart } from "@phosphor-icons/react";

export function ItemCard(){
    return (

        <CardContainer>
            <ImageContainer>
                <img src={CoffeeImg} alt="" />
            </ImageContainer>
            <Card>
                <CardContent>
                    <Tags>
                        <span>TRADICIONAL</span>
                        <span>COM LEITE</span>
                    </Tags>
                    <h3>Expresso Tradicional</h3>
                    <p>O tradicional café feito com água quente e grãos moídos</p>
                </CardContent>

                <CardFooter>
                    <PriceContainer>
                        <span>R$</span>
                        <strong>9,90</strong>
                    </PriceContainer>
                    <button><ShoppingCart/></button>
                </CardFooter>
            </Card>
        </CardContainer>
    )
}