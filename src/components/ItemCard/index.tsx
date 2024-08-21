import { CardButton, CardContainer, CardContent, CardFooter, CardImg, OrderContainer, PriceContainer, Tags } from "./styles";
import { CheckFat, ShoppingCart } from "@phosphor-icons/react";
import { QuantityInput } from "../QuantityInput";
import { useEffect, useState } from "react";
import { useTheme } from "styled-components";

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
    tags: string[];
    image: string;
    price: string;
}

type ItemCardProps ={
    coffee: {
        id: number;
        title: string;
        description: string;
        tags: string[];
        image: string;
        price: string;
    }
}

export function ItemCard({ coffee }: ItemCardProps){
    const [quantity, setQuantity] = useState(1);
    const theme = useTheme()
    const [order, setOrder] = useState({} as CoffeeItem);
    const [isOrderSelected, setIsOrderSelected] = useState(false);

    function handleQuantityIncrement(){
        setQuantity(quantity + 1);
    }

    function handleQuantityDecrement(){
        if(quantity > 1){
            setQuantity(quantity - 1);
        }
    }

    function handleAddItem(){
        setOrder(coffee);
        setIsOrderSelected(true);
    }

    useEffect(() => {
        let timeout: number
    
        if (isOrderSelected) {
          timeout = setTimeout(() => {
            setIsOrderSelected(false)
          }, 1000)
        }
    
        return () => {
          if (timeout) {
            clearTimeout(timeout)
          }
        }
      }, [isOrderSelected])


      console.log(order)

    return (
            <CardContainer>
                <CardImg src={coffee.image} alt="" />
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

                    
                        <CardButton $isOrderSelected={isOrderSelected} disabled={isOrderSelected} onClick={handleAddItem}>
                            {isOrderSelected 
                            ?
                                <CheckFat 
                                    weight="fill" 
                                    color={theme['base-card']}
                                    size={22}
                                /> 
                            : 
                                <ShoppingCart
                                    weight="fill" color={theme['base-card']}
                                    size={22}
                                />
                            }
                        </CardButton>
                    </OrderContainer>
                </CardFooter>
        </CardContainer>
    )
}