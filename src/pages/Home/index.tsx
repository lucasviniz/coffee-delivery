import { Banner } from "../../components/Banner"
import { Header } from "../../components/Header"
import { HomeContainer } from "./styles"

export function Home(){
    return (
        <HomeContainer>
            <Header/>
            <Banner/>
            <h2>Nossos Cafés</h2>
        </HomeContainer>
    )
}