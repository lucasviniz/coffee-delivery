import { CardButton, CardContainer, CardContent, CardFooter, CardImg, CoffeeListContainer, OrderContainer, PriceContainer, Tags } from "./styles";
import { CheckFat, ShoppingCart } from "@phosphor-icons/react";
import { QuantityInput } from "../QuantityInput";
import { useState } from "react";
import { coffeeData } from '../../../data.json'
import CoffeeImg from "../../assets/images/coffee/americano.png";

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
        
            <CoffeeListContainer>
                {coffeeData.map((coffee) => (
                    <CardContainer>
                        <CardImg src={CoffeeImg} alt="" />
                        <CardContent>
                            <Tags>
                                <span>TRADICIONAL</span>
                                <span>COM LEITE</span>
                            </Tags>
                            <h3>{coffee.title}</h3>
                            <p>{coffee.description}</p>
                        </CardContent>

                        <CardFooter>
                            <PriceContainer>
                                <span>R$</span>
                                <strong>{coffee.price}</strong>
                            </PriceContainer>

                            <OrderContainer>
                                <QuantityInput quantity={quantity} handleDecrement={handleQuantityDecrement} handleIncrement={handleQuantityIncrement}/>

                            
                                <CardButton>
                                    {order.id ? <CheckFat  weight="fill" color="#FFFFFF" size={24}/> : <ShoppingCart onClick={makeAWish} weight="fill" color="#FFFFFF" size={24}/>}
                                </CardButton>
                            </OrderContainer>
                        </CardFooter>
                </CardContainer>
                ))}
            </CoffeeListContainer>
    )
}