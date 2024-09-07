import React from 'react'
import {
  PollCard,
  Title,
  PollListContainer,
  Status,
  Button,
  StatusButtonWrapper
} from './styles'
import { polls } from '../data/PollData'
import { useNavigate } from 'react-router-dom'

const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0') // Os meses começam do 0
  const year = date.getFullYear()
  return `${day}-${month}-${year}`
}

const PollList = () => {
  const navigate = useNavigate()

  const handleRespondClick = () => {
    navigate('/page')
  }

  return (
    <PollListContainer>
      <Title>Todas as enquetes</Title>
      {polls.map((poll) => (
        <PollCard key={poll.id}>
          <div>
            <h3>{poll.title}</h3>
            {poll.text && <p className="poll-text">{poll.text}</p>}{' '}
            <p>Iniciada em: {formatDate(poll.startDate)}</p>
            <p>Finalizada em: {formatDate(poll.endDate)}</p>
          </div>
          <StatusButtonWrapper>
            <Status status={poll.status}>
              <p>{poll.status}</p>
            </Status>
            {poll.status === 'Em andamento' && (
              <Button onClick={handleRespondClick}>Responder</Button>
            )}
          </StatusButtonWrapper>
        </PollCard>
      ))}
    </PollListContainer>
  )
}

export default PollList
