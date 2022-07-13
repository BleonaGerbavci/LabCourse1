import React from 'react'
import ServicesF1 from '../../images/servicesF1.svg'
import ServicesF2 from '../../images/servicesF2.svg'
import ServicesF3 from '../../images/servicesF3.svg'
import { ServicesContainer,ServicesH1,ServicesWrapper,ServicesH2,ServicesCard,ServicesIcon,ServicesP } from './ServicesElements'
import Navbar from '../Navbar'


const Services = () => {
  return (
    <>
    <Navbar />
    <ServicesContainer>
        <ServicesH1>Sherbimet tona </ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={ServicesF1}/>
                <ServicesH2>Udheto</ServicesH2>
                <ServicesP>Rezervo bileten tende tani!</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={ServicesF2}/>
                <ServicesH2>Rezervo</ServicesH2>
                <ServicesP>Rezervo nje autobus! </ServicesP>
            </ServicesCard>
             <ServicesCard>
                <ServicesIcon src={ServicesF3}/>
                <ServicesH2>Ofertat</ServicesH2>
                <ServicesP>Perfito zbritje nga ofertat tona!</ServicesP>
            </ServicesCard>

        </ServicesWrapper>
    </ServicesContainer>
 
    </>
  )
}

export default Services