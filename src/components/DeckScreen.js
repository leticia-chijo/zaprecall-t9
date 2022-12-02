import Flashcard from "./Flashcard"
import Footer from "./Footer"
import logo from "../assets/logo.png"
import styled from "styled-components"
import deckReact from "../constants/deckReact"
import { useState } from "react"


export default function DeckScreen() {
    const [counter, setCounter] = useState(0)

    return (
        <ScreenContaier>

            <LogoContainer>
                <img src={logo} alt="Logo do ZapRecall - raio amarelo" />
                <h1>ZapRecall</h1>
            </LogoContainer>

            {deckReact.map((card, i) => (
                <Flashcard
                    key={card.question}
                    index={i}
                    card={card}
                />
            ))}

            <Footer totalQuestions={deckReact.length} questionsCounter={counter}/>

        </ScreenContaier>
    )
}

const ScreenContaier = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0 20px 0;
  img {
    width: 52px;
  }
  h1 {
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #FFFFFF;
    margin-left: 20px;
  }
`