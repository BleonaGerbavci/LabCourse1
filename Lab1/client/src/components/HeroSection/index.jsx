import React, {useState} from 'react'
import Image from '../../images/Home-Page.svg'
import { HeroContainer, HeroBg, HeroContent, HeroH1, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import {Button} from '../ButtonElement'
import "./hero.css";
const HeroSection = () => {

const [hover, setHover] =useState(false)

const onHover = () => {
    setHover(!hover)
}

  return (
    <HeroContainer>
        <HeroBg>
        
        <img src={Image} alt="img" className='image' />

        </HeroBg>
        <HeroContent>
            <HeroH1>Shpejte dhe lehte, vec me udhtu t'ka mbete</HeroH1>
            
            <HeroBtnWrapper>
                <Button to="signup" onMouseEnter={onHover} onMouseLeave ={onHover}
                primary="true"
                dark="true"
                >
                    Anetaresohu { hover ? <ArrowForward/> : <ArrowRight/> }
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection