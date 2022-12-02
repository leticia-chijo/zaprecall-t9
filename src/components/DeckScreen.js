import Flashcard from "./Flashcard"
import Footer from "./Footer"
import logo from "../assets/logo.png"

export default function DeckScreen() {
    return (
        <div>
            <img src={logo} alt="Logo do ZapRecall - raio amarelo" />
            <h1>ZapRecall</h1>

            <Flashcard />
            <Flashcard />
            <Flashcard />
            <Flashcard />

            <Footer />
        </div>
    )
}