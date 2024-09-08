import React from 'react'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import votix from '../assets/votix.png'
import {
  ContainerFooter,
  ImageFooter,
  Link,
  Links,
  TextAndImage
} from './styles'

const Footer = () => (
  <ContainerFooter>
    <TextAndImage>
      <ImageFooter src={votix} alt="Votix" />
      <p>2024 &copy; Votix- Todos os direitos reservados.</p>
    </TextAndImage>
    <Links>
      <Link>
        <a href="#" aria-disabled="true">
          <img src={facebook} alt="Facebook" />
        </a>
      </Link>
      <Link>
        <a href="#" aria-disabled="true">
          <img src={instagram} alt="Instagram" />
        </a>
      </Link>
      <Link>
        <a href="#" aria-disabled="true">
          <img src={twitter} alt="Twitter" />
        </a>
      </Link>
    </Links>
  </ContainerFooter>
)

export default Footer
