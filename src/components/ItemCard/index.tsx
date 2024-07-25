import { CardButton, CardContainer, CardContent, CardFooter, CardImg, OrderContainer, PriceContainer, Tags } from "./styles";
import CoffeeImg from "../../assets/images/coffee/Coffee-1.svg"
import { CheckFat, ShoppingCart } from "@phosphor-icons/react";
import { QuantityInput } from "../QuantityInput";
import { useState } from "react";

interface Order{
    id: number;
    quantity: number;
    price: number;
    coffee: string;
    total: number;
}

export function ItemCard(){
    const [quantity, setQuantity] = useState(1);
    const [order, setOrder] = useState({} as Order);

    function handleQuantityIncrement(){
        setQuantity(quantity + 1);
    }

    function handleQuantityDecrement(){
        if(quantity > 1){
            setQuantity(quantity - 1);
        }
    }

    function makeAWish(){
        setOrder({
            id: Math.random(),
            quantity,
            price: 9.90,
            coffee: "Expresso Tradicional",
            total: quantity * 9.90
        });
        console.log("Pedido adicionado ao carrinho!");
    }

    return (
                
            <CardContainer>
                <CardImg src={CoffeeImg} alt="" />
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

                    <OrderContainer>
                        <QuantityInput quantity={quantity} handleDecrement={handleQuantityDecrement} handleIncrement={handleQuantityIncrement}/>

                    
                        <CardButton>
                            {order.id ? <CheckFat  weight="fill" color="#FFFFFF" size={24}/> : <ShoppingCart onClick={makeAWish} weight="fill" color="#FFFFFF" size={24}/>}
                        </CardButton>
                    </OrderContainer>
                </CardFooter>
            </CardContainer>
    )
}