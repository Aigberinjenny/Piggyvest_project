import React from 'react'
import { BsInstagram, BsTiktok, BsTwitterX, BsYoutube } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import logo from '../../Assets/The Better Way To Save _ Invest Online - PiggyVest/piggybank-icon.png'
import image from '../../Assets/The Better Way To Save _ Invest Online - PiggyVest/compliance-27923b9c92565dcd4d9750070c39f3a3.avif'
import styled from 'styled-components'


const Footer = () => {
    return (
        <Container>
            <Right>
                <Image src={logo} />
                <Image src={image} />

            </Right>
            <Center>
                <Text1>
                    Product
                </Text1>
                <Text2>
                    Piggybank
                    Invest
                    Safelock
                    Target Savings
                    Flex Naira
                    Flex Dollar
                </Text2>
                <Text1>
                    Company
                </Text1>
                <Text2>
                    About
                    FAQs
                    Blog
                </Text2>
                <Text1>
                    Legal
                </Text1>
                <Text2>
                    Terms
                    Privacy
                    Security
                </Text2>
            </Center>
            <Left>
                <Icon>
                    <Image src={FaFacebook} />
                    <Image src={BsInstagram} />
                    <Image src={BsTwitterX} />
                    <Image src={BsTiktok} />
                    <Image src={BsYoutube} />
                </Icon>
                <Address>Tesmot house, Abdulrahman Okene close, Victoria Island, Lagos, Nigeria.</Address>
                <Contact>contact@piggyvest.com</Contact>
                <Number>+234 700 933 9339</Number>
            </Left>
        </Container>
    )
}

export default Footer



const Image = styled.img`



`

const Icon = styled.img`



`

const Container = styled.div`


`

const Text1 = styled.div`



`

const Text2 = styled.div`


`

const Address = styled.div`


`

const Contact = styled.div`

`


const Right = styled.div`


`
const Center = styled.div`


`

const Left = styled.div`


`

const Number = styled.div`


`