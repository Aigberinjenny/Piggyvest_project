import React from "react"
import styled from "styled-components"
import image from "../../Assets/The Better Way To Save _ Invest Online - PiggyVest/logo.svg"
//import { useMediaQuery } from 'react-responsive'

const Header = () => {
    return (
        <Container>
            <Main>
                <Image src={image} />

                <Navs>
                    <Nav>Save</Nav>
                    <Nav>Invest</Nav>
                    <Nav>Stories</Nav>
                    <Nav>FAQs</Nav>
                    <Nav>Resources</Nav>
                </Navs>
                <Sign>Sign in</Sign>
                <Button>Create free account</Button>
            </Main>


        </Container>
    )
}

export default Header

const Sign = styled.div`
    background-color: white;
    padding: 16.5px 16px;
    //margin: 30px;
    color: #37424C;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;

`


const Image = styled.div`
    font-size: 24px;
    width: 20%;
    font-weight: 800;
    //margin-right: 50px;
    margin-left: 40px;

    
 
`


const Nav = styled.div`
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
`


const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-top:30px;
    position: fixed;
    background-color: #E4E8E9;
    /* display: flex;
    justify-content: center;
    align-items: center; */



`
const Navs = styled.div`
   //margin-left: 0px;
    margin-right:80px;
    width: 50%;
    height: 100% ;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;



`

const Button = styled.div`
    padding: 16.5px 16px;
    margin-right: 70px;
    background-color: #122231;
    color: #FFFFFF;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 500;
    //cursor: pointer;

`

const Main = styled.div`
    //margin-top: 30px;
    height: 40px;
    width: 100%;
    //background-color: #3d3fc5;
    display: flex;
    justify-content: space-between;
    align-items: center;



`
// const media = styled.div`
//     max-width: 768px;
//     flex-direction: column;
// `
// const media = styled.div`
//     min-width: 768px;
//     flex-direction: row;
// `
