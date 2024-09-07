import React, { useState } from 'react'
import {
  OptionPoll,
  PollDetailContainer,
  PageContainer,
  OptionContainer,
  Button,
  ResultContainer,
  ResultBar,
  ResultText,
  Percentage,
  Text
} from './styles'

const initialOptions = [
  { id: 1, text: 'Facebook', votes: 10 },
  { id: 2, text: 'Instagram', votes: 5 },
  { id: 3, text: 'Twitter (X)', votes: 1 },
  { id: 4, text: 'LinkedIn', votes: 4 },
  { id: 5, text: 'Tiktok', votes: 6 },
  { id: 6, text: 'WhatsApp', votes: 2 }
]

const PollDetail: React.FC = () => {
  const [options, setOptions] = useState(initialOptions)
  const [hasVoted, setHasVoted] = useState(false)

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
    <PageContainer>
      <PollDetailContainer>
        <h2>Enquete</h2>
        <p>
          Segundo o levantamento da Digital 2024: <br /> No Brasil, o WhatsApp é
          usado por 93,4% da população brasileira.
        </p>
        <h3>Qual rede social você usa com mais frequência?</h3>
        {hasVoted ? (
          <div>
            {options.map((option) => (
              <ResultContainer key={option.id}>
                <ResultBar width={calculatePercentage(option.votes)}>
                  <ResultText>{option.text}</ResultText>
                  <Percentage>{calculatePercentage(option.votes)}%</Percentage>
                </ResultBar>
              </ResultContainer>
            ))}
            <Text>Muito obrigado! Veja mais enquetes</Text>
          </div>
        ) : (
          options.map((option) => (
            <OptionContainer key={option.id}>
              <OptionPoll>
                <Button onClick={() => handleVote(option.id)}>
                  {option.text}
                </Button>
              </OptionPoll>
            </OptionContainer>
          ))
        )}
      </PollDetailContainer>
    </PageContainer>
  )
}

export default PollDetail
