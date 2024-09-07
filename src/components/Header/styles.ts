import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.orange};
  width: 100%;
  height: 120px;
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;

  @media (${breakpoints.tablet}) {
    flex-direction: column;
    justify-content: center;
    height: auto;
  }

  @media (${breakpoints.celular}) {
    flex-direction: column;
    justify-content: center;
    height: auto;
    width: 100%;
  }
`

export const Title = styled.div`
  font-size: 55px;
  color: ${colors.white};
  font-family: "Matemasie", sans-serif;
  font-weight: 400;
  font-style: normal;
  margin: 20px 20px 30px 50px;

  @media (${breakpoints.tablet}) {
    font-size: 60px;
    margin: 10px 0;
  }

  @media (${breakpoints.celular}) {
    font-size: 35px;
    margin: 10px 0;
  }
}
`

export const Button = styled.button`
  font-size: 18px;
  margin: 30px 50px 30px 20px;
  padding: 5px 10px;
  font-weight: bold;
  border-radius: 20px;
  width: 150px;
  height: 40px;
  border: none;
  background-color: ${colors.redDark};
  color: ${colors.white};
  transition:
    transform 0.3s ease,
    background-color 0.3s ease,
    color 0.3s ease;

  &:hover {
    background-color: ${colors.white};
    color: ${colors.redDark};
    transform: scale(1.1);
  }

  @media (${breakpoints.tablet}) {
    width: 200px;
    height: 40px;
    font-size: 20px;
    margin: 20px 0;
  }

  @media (${breakpoints.celular}) {
    width: 120px;
    height: 30px;
    font-size: 14px;
    margin: 20px 0;
  }
`
