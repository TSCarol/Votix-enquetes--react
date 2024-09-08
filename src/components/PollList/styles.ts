import styled, { DefaultTheme } from 'styled-components'
import { breakpoints, colors } from '../../styles'

interface StatusProps {
  status: 'Em andamento' | 'Não iniciada' | 'Finalizada'
}

const getStatusColor = (status: StatusProps['status'], theme: DefaultTheme) => {
  switch (status) {
    case 'Em andamento':
      return theme.colors.inProgress
    case 'Não iniciada':
      return theme.colors.active
    case 'Finalizada':
      return theme.colors.completed
    default:
      return theme.colors.redDark
  }
}

export const PollListContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 60px 120px;

  @media (${breakpoints.tablet}) {
    padding: 40px 60px;
    padding: 10px 20px;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }

  @media (${breakpoints.celular}) {
    padding: 20px 30px;
    gap: 15px;
  }
`

export const Title = styled.h2`
  display: flex;
  font-family: 'Teko', sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  background-color: ${colors.redDark};
  color: ${colors.white};
  border-radius: 25px;
  padding: 10px 20px 10px 20px;
  justify-content: center;

  @media (${breakpoints.tablet}) {
    padding: 10px 20px 10px 20px;
    width: 180px;
    align-items: center;
    margin-bottom: 40px;
    margin-top: 60px;
  }

  @media (${breakpoints.celular}) {
    padding: 10px 20px 10px 20px;
    width: 180px;
    justify-content: center;
    margin-left: 50px;
    margin-bottom: 10px;
    margin-top: 10px;
  }
`

export const PollCard = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background-color: ${colors.white};
  border-radius: 25px;
  position: relative;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    height 0.3s ease;

  height: auto;

  p.poll-text {
    opacity: 0;
    visibility: hidden;
    transition:
      opacity 0.3s ease,
      visibility 0.3s ease;
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    border: 3px solid ${colors.redDark};
    height: auto;

    p.poll-text {
      opacity: 1;
      visibility: visible;
    }
  }

  h3 {
    font-family: 'Teko', sans-serif;
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal;
    font-size: 20px;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    margin-left: 15px;
    margin-bottom: 10px;
    word-wrap: break-word;
  }

  @media (${breakpoints.tablet}) {
    display: flex;
    justify-content: space-between;
    width: 650px;
    bottom: 50px;

    h3 {
      font-size: 23px;
    }
    p {
      font-size: 16px;
      margin-left: 10px;
      margin-bottom: 5px;
    }
  }

  @media (${breakpoints.celular}) {
    flex-direction: column;
    height: auto;
    margin-bottom: 30px;

    h3 {
      font-size: 18px;
    }
    p {
      font-size: 14px;
      margin-bottom: 0px;
    }
  }
`

export const Status = styled.div<StatusProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ status, theme }) => getStatusColor(status, theme)};
  color: ${colors.white};
  border-radius: 25px;
  width: 150px;
  height: 40px;

  p {
    font-family: 'Teko', sans-serif;
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal;
    font-size: 18px;
    text-align: center;
    color: ${colors.white};
    margin: 0;
  }
`

export const Button = styled.button`
  font-size: 16px;
  font-weight: bold;
  background-color: ${colors.redDark};
  color: ${colors.white};
  border: 3px solid ${colors.redDark};
  border-radius: 25px;
  width: 150px;
  height: 40px;
  transition:
    transform 0.3s ease,
    background-color 0.3s ease;

  &:hover {
    background-color: ${colors.yellow};
    transform: scale(1.1);
  }
`

export const StatusButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-right: 20px;

  @media (${breakpoints.tablet}) {
    margin-top: 20px;
  }

  @media (${breakpoints.celular}) {
    margin-top: 20px;
    margin-bottom: 5px;
  }
`
