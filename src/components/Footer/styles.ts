import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const ContainerFooter = styled.footer`
  background-color: ${colors.orange};
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px 0;
  margin-top: auto;

  p {
    color: ${colors.yellow};
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 0px;
    margin-top: 20px;
  }

  @media (${breakpoints.tablet}) {
    padding: 15px 0;
    p {
      font-size: 16px;
    }
  }

  @media (${breakpoints.celular}) {
    p {
      font-size: 14px;
    }
  }
`

export const TextAndImage = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (${breakpoints.celular}) {
    flex-direction: column;
    gap: 5px;
  }
`

export const ImageFooter = styled.img`
  padding: 0;

  @media (${breakpoints.celular}) {
    width: 50px;
  }
`

export const Links = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: center;
  padding: 0;
  margin-top: 5px;

  @media (${breakpoints.tablet}) {
    margin-top: 10px;
  }

  @media (${breakpoints.celular}) {
    gap: 15px;
    margin-bottom: 15px;
  }
`

export const Link = styled.li`
  width: 24px;
  height: 24px;
  text-decoration: none;
  margin-left: 20px;
  bottom: 0px;

  img {
    width: 30px;
    height: 30px;
  }

  @media (${breakpoints.tablet}) {
    margin-left: 15px;

    img {
      width: 28px;
      height: 28px;
    }
  }

  @media (${breakpoints.celular}) {
    margin-left: 0;
    img {
      width: 25px;
      height: 25px;
    }
  }
`
