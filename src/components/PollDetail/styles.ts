import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 90px;

  @media (${breakpoints.celular}) {
    margin-top: 60px;
  }
`

export const PollDetailContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  background-color: ${colors.white};
  width: 700px;
  height: 600px;
  border-radius: 80px;
  border: 5px solid ${colors.orange};

  h2 {
    font-family: 'Matemasie', sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 40px;
    background-color: ${colors.orange};
    color: ${colors.redDark};
    border-radius: 30px;
    padding: 10px 20px 10px 20px;
    margin-top: 40px;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 25px;
    color: ${colors.dark};
    margin-bottom: 10px;
  }

  p {
    font-size: 20px;
    color: ${colors.dark};
    text-align: center;
  }

  @media (${breakpoints.tablet}) {
    width: 90%;
    height: auto;
    border-radius: 50px;

    h2 {
      font-size: 30px;
    }

    h3 {
      font-size: 20px;
    }

    p {
      font-size: 18px;
    }
  }

  @media (${breakpoints.celular}) {
    border-radius: 30px;
    width: 300px;
    height: 650px;

    h2 {
      font-size: 25px;
    }

    h3 {
      font-size: 18px;
      widht: 70%;
      text-align: center;
    }

    p {
      font-size: 16px;
      width: 80%;
    }
  }
`

export const OptionContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
  margin-bottom: 5px;

  @media (${breakpoints.tablet}) {
    width: 90%;
    height: auto;
    border-radius: 50px;
  }

  @media (${breakpoints.celular}) {
    border-radius: 30px;
    width: 200px;
  }
`

export const OptionPoll = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
`

export const Button = styled.button`
  font-size: 16px;
  font-weight: bold;
  background-color: ${colors.orange};
  color: ${colors.redDark};
  border: 3px solid ${colors.redDark};
  border-radius: 5px;
  padding: 10px 10px 10px 10px;
  width: 100%;
  transition:
    transform 0.3s ease,
    background-color 0.3s ease;

  &:hover {
    background-color: ${colors.yellow};
    transform: scale(1.1);
  }
`

export const ResultContainer = styled.div`
  width: 100%;
  margin-bottom: 10px;
`

export const ResultBar = styled.div<{ width: string }>`
  background-color: ${colors.orange};
  padding: 20px;
  widht: ${({ width }) => width}%;
  border-radius: 5px;
  position: relative;
  transition: width 0.4s ease;
`

export const ResultText = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.redDark};
  position: absolute;
  left: 12px;
  bottom: 5px;
`

export const Percentage = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.redDark};
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
`

export const Text = styled.p`
  font-size: 14px;
  font-weight: bold;
`
