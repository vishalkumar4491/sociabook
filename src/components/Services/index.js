import React from 'react'
import Icon1 from '../../images/img-3.png'
import Icon2 from '../../images/img-5.png'
import Icon3 from '../../images/img-6.png'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Directly Contact</ServicesH2>
                    <ServicesP>You can directly Call Buyer or Seler</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>No Comission</ServicesH2>
                    <ServicesP>We acn not take any Commisions</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Directly Contact</ServicesH2>
                    <ServicesP>You can directly Call Buyer or Seler</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
            
        </ServicesContainer>
    )
}

export default Services
