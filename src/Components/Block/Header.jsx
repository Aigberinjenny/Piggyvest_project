import React from "react"
import styled from "styled-components"
import logo from "../../Assets/Piggyvest-images/logo.svg"

const Header = () => {
    return (
        <Container>
            <Main>
                <Image src={logo} />
                <Nav>
                    <SubNavs>Save</SubNavs>
                    <SubNavs>Invest</SubNavs>
                    <SubNavs>Stories</SubNavs>
                    <SubNavs>FAQs</SubNavs>
                    <SubNavs>Resources</SubNavs>
                </Nav>
                <div>
                    <button className="Sign">Sign in</button>
                    <button>Create free account</button>
                </div>


            </Main>
        </Container>
    )
}

export default Header


const Image = styled.img`
   width: 20px;
   margin-left: 15px;
`


const Button = styled.div`
    padding: 12px 22px;
    background-color: #122231;
    color: black;
    border-radius: 30px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;

    
`

const Sign = styled.div`
    padding: 12px 22px;
    background-color: white;
    color: black;
    border-radius: 30px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
`

const Nav = styled.div`
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
`

const Navs = styled.div`
    width: 37%;
    /* background-color: blue; */
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Logo = styled.div`
font-size: 24px;
font-weight: 800;
`

const Main = styled.div`
width:  90%;
height: 100%;
/* background-color: black; */
display: flex;
justify-content: space-between;
align-items: center;
`
const SubNavs = styled.div`
    color: #0D1926;

`
const Container = styled.div`
height: 85px;
width: 100vw;
background-color: white;
display: flex;
justify-content: space-between;
align-items: center;

`