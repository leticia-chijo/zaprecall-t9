import { useState } from "react"
import styled from "styled-components"
import play from "../assets/seta_play.png"
import turnArrow from "../assets/seta_virar.png"

export default function Flashcard({ index, card }) {
    const [started, setStarted] = useState(false)
    const [turned, setTurned] = useState(false)
    const [finished, setFinished] = useState(false)

    function showQuestion() {
        if (!finished) {
            setStarted(true)
        }
    }

    function showAnswer() {
        setTurned(true)
    }

    function answerQuestion() {
        setStarted(false)
        setFinished(true)
    }

    return (
        <>
            {!started ? (
                <PerguntaFechada>
                    <p>Pergunta {index + 1}</p>
                    <img onClick={showQuestion} src={play} alt="Ícone play" />
                </PerguntaFechada>
            ) : (
                <PerguntaAberta>
                    {!turned ? (
                        <>
                            {card.question}
                            <img onClick={showAnswer} src={turnArrow} alt="Seta de virar o card" />
                        </>
                    ) : (
                        <>
                            {card.answer}
                            <ContainerBotoes>
                                <button onClick={answerQuestion}>Não Lembrei</button>
                                <button onClick={answerQuestion}>Quase não Lembrei</button>
                                <button onClick={answerQuestion}>Zap!</button>
                            </ContainerBotoes>
                        </>
                    )}
                </PerguntaAberta>
            )}
        </>



    )
}

const PerguntaFechada = styled.div`
  width: 300px;
  height: 35px;
  background-color: #FFFFFF;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
`
const PerguntaAberta = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img{
    position: absolute;
    bottom: 10px;
    right: 10px;
}
`
const ContainerBotoes = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    button {
        width: 90px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #FFFFFF;
        background: blue;
        border-radius: 5px;
        border: 1px solid blue;
        padding:5px;
    }
`