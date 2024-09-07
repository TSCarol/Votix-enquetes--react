import React, { useState } from 'react'
import {
  Page,
  PollDetailPage,
  ResultPage,
  ResultBarPage,
  ResultTextPage,
  Text,
  OptionPage,
  OptionPollPage,
  ButtonPage,
  PercentagePage,
  BackButton
} from './styles'
import { useNavigate } from 'react-router-dom'

const initialOptions = [
  { id: 1, text: '- de 4 horas', votes: 10 },
  { id: 2, text: '5 horas', votes: 5 },
  { id: 3, text: '6 horas', votes: 1 },
  { id: 4, text: '7 horas', votes: 4 },
  { id: 5, text: '8 horas', votes: 6 },
  { id: 6, text: '+ de 9 horas', votes: 2 }
]

const DetailPage: React.FC = () => {
  const [options, setOptions] = useState(initialOptions)
  const [hasVoted, setHasVoted] = useState(false)
  const navigate = useNavigate()

  const handleRespondClick = () => {
    navigate('/')
  }

  const totalVotes = options.reduce(
    (acc: number, option: { votes: number }) => acc + option.votes,
    0
  )

  const handleVote = (id: number) => {
    if (hasVoted) return
    setOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === id ? { ...option, votes: option.votes + 1 } : option
      )
    )
    setHasVoted(true)
  }

  const calculatePercentage = (votes: number) => {
    return ((votes / totalVotes) * 100).toFixed(1)
  }

  return (
    <Page>
      <BackButton onClick={handleRespondClick}>
        Voltar à Página Inicial
      </BackButton>
      <PollDetailPage>
        <h2>Enquete</h2>
        <p>
          Segundo uma meta-análise, tanto a curta quanto a longa duração do sono
          estão associadas a um aumento no risco de mortalidade. Gangwisch et
          al., 2008
        </p>
        <h3>Quantas horas você dorme em média por noite?</h3>
        {hasVoted ? (
          <div>
            {options.map((option) => (
              <ResultPage key={option.id}>
                <ResultBarPage width={calculatePercentage(option.votes)}>
                  <ResultTextPage>{option.text}</ResultTextPage>
                  <PercentagePage>
                    {calculatePercentage(option.votes)}%
                  </PercentagePage>
                </ResultBarPage>
              </ResultPage>
            ))}
            <Text>Muito obrigado! Veja mais enquetes</Text>
          </div>
        ) : (
          options.map((option) => (
            <OptionPage key={option.id}>
              <OptionPollPage>
                <ButtonPage onClick={() => handleVote(option.id)}>
                  {option.text}
                </ButtonPage>
              </OptionPollPage>
            </OptionPage>
          ))
        )}
      </PollDetailPage>
    </Page>
  )
}

export default DetailPage
