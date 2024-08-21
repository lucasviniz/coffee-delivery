import { Banner } from "../../components/Banner"
import { Header } from "../../components/Header"
import { ItemCard } from "../../components/ItemCard"
import { CoffeeList, ContentContainer, HomeContainer } from "./styles"
import { coffeeData } from '../../app/order/order.json'

export function Home(){
    return (
        <HomeContainer>
            <Header/>
            <Banner/>

            <ContentContainer>
                <h2>Nossos Cafés</h2>

                <br/>
                <br/>
                <CoffeeList>
                    {coffeeData.map((coffee) => (
                        <ItemCard key={coffee.id} coffee={coffee}/>
                    ))}
                </CoffeeList>
            </ContentContainer>
        </HomeContainer>
    )
}