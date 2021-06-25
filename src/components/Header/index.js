import React, {useState} from 'react'
import { HeroContainer, HeroBg, ImageBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeaderElements'
import { Button } from '../ButtonElements'
import bgImage from '../../bgImage.jpg'

const Header = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id='home'>
            <HeroBg>
                <ImageBg  src={bgImage}  />
            </HeroBg>
            <HeroContent>
                <HeroH1>Buy And Sell Your Book</HeroH1>
                <HeroP>
                    Sign Up today to Sell Your Old Books
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="/buy" onMouseEnter={onHover} onMouseLeave={onHover} primary = 'true' dark = 'true'>Get Started {hover ? <ArrowForward /> : <ArrowRight />}</Button>
                </HeroBtnWrapper>


            </HeroContent>
        </HeroContainer>
    )
}

export default Header
