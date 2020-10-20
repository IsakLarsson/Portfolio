import React from 'react'
import Background from '../../images/mountains-compressed.jpg'
import {HeroContainer, HeroBG, ImageBG, ImageOverlay, HeroContent, HeroH1, HeroP, HeroBtnWrapper, Button} from './HeroElements';

export const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBG>
        <ImageBG src={Background}/>
        <ImageOverlay></ImageOverlay>
      </HeroBG>
      <HeroContent>
        <HeroH1>ISAK LARSSON</HeroH1>
        <HeroP>An aspiring developer who likes to engage in both frontend and backend development, </HeroP>
        <HeroP>allow me to </HeroP>
        <HeroBtnWrapper>
          <Button to="about" >Introduce myself! </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}
