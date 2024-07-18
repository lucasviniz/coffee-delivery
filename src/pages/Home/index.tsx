import { Banner } from "../../components/Banner"
import { Header } from "../../components/Header"
import { ItemCard } from "../../components/ItemCard"
import { ContentContainer, HomeContainer } from "./styles"

export function Home(){
    return (
        <HomeContainer>
            <Header/>
            <Banner/>

            <ContentContainer>
                <h2>Nossos Cafés</h2>

                <br/>
                <br/>
                <ItemCard/>
            </ContentContainer>
        </HomeContainer>
    )
}