import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'


export const HeroContainer = styled.div`
    background: #fffff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
`

export const HeroBg = styled.div`
    position: relative;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const ImageBg= styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #ffff;
` 
 export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;

 `

 export const HeroH1= styled.h1`
    color: #FC9C09;
    font-size: 48px;
    margin-left:780px;
    text-align:center;
    

    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px)  {
        font-size: 32px;   
    }
 `



export const HeroBtnWrapper = styled.div`
    margin-top: 50px;
    margin-left:780px;
    display: flex;
    flex-direction: column;
    align-items: left;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-right: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`