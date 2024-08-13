import { CardButton, CardContainer, CardContent, CardFooter, CardImg, CoffeeListContainer, OrderContainer, PriceContainer, Tags } from "./styles";
import { CheckFat, ShoppingCart } from "@phosphor-icons/react";
import { QuantityInput } from "../QuantityInput";
import { useState } from "react";
import { coffeeData } from '../../../data.json'
import CoffeeImg from "../../assets/images/coffee/americano.png";

// interface Order{
//     id: number;
//     quantity: number;
//     price: number;
//     coffee: string;
//     total: number;
// }

interface CoffeeItem{
    id: number;
    title: string;
    description: string;
    tags:{ "1": string , "2"?: string};
    image: string;
    price: string;
}

export function ItemCard(){
    const [quantity, setQuantity] = useState(1);
    const [orderSelected, setOrderSelected] = useState({} as CoffeeItem);

    function handleQuantityIncrement(){
        setQuantity(quantity + 1);
    }

    function handleQuantityDecrement(){
        if(quantity > 1){
            setQuantity(quantity - 1);
        }
    }

    return (
        
            <CoffeeListContainer>
                {coffeeData.map((coffee) => (
                    <CardContainer key={coffee.id}>
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
                                    {orderSelected.id == coffee.id ? <CheckFat  weight="fill" color="#FFFFFF" size={24}/> : <ShoppingCart onClick={() => setOrderSelected(coffee)} weight="fill" color="#FFFFFF" size={24}/>}
                                </CardButton>
                            </OrderContainer>
                        </CardFooter>
                </CardContainer>
                ))}
            </CoffeeListContainer>
    )
}