import React from 'react'
import {
  ListPageContainer,
  PageCard,
  StatusButton,
  StatusPage,
  TitlePage
} from './styles'
import { polls } from '../data/PollData'

const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0') // Os meses começam do 0
  const year = date.getFullYear()
  return `${day}-${month}-${year}`
}

const ListPage = () => (
  <ListPageContainer>
    <TitlePage>Todas as enquetes</TitlePage>
    {polls
      .filter((poll) => poll.status !== 'Em andamento') // Filtra as enquetes que não estão em andamento
      .map((poll) => (
        <PageCard key={poll.id}>
          <div>
            <h3>{poll.title}</h3>
            {poll.text && <p className="poll-text">{poll.text}</p>}{' '}
            <p>Iniciada em: {formatDate(poll.startDate)}</p>
            <p>Finalizada em: {formatDate(poll.endDate)}</p>
          </div>
          <StatusButton>
            <StatusPage status={poll.status}>
              <p>{poll.status}</p>
            </StatusPage>
          </StatusButton>
        </PageCard>
      ))}
  </ListPageContainer>
)

export default ListPage
