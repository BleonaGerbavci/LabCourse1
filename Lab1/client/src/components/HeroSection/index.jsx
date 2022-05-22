import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1,HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import {Button} from '../ButtonElement'
const HeroSection = () => {

const [hover, setHover] =useState(false)

const onHover = () => {
    setHover(!hover)
}

  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />

        </HeroBg>
        <HeroContent>
            <HeroH1>Shpejte dhe lehte, vec me udhtu t'ka mbete</HeroH1>
            <HeroP>
                Behu sot klient i RezerGo dhe perfito 10% 
                zbritje ne rezervim te nje bilete.
            </HeroP>
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