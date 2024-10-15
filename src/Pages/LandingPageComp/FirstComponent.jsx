import React from "react"
import styled from "styled-components"
import iphone from "../../Assets/The Better Way To Save _ Invest Online - PiggyVest/whiteAppleLogo.svg"
import android from "../../Assets/The Better Way To Save _ Invest Online - PiggyVest/google-icon.svg"


const FirstComponent = () => {
    return (
        <div>
            <BigText>
                The Better Way To Save And Invest
            </BigText>
            <SmallText>
                Piggyvest helps over 5 million customers achieve their financial goals by helping them save and invest with ease.
            </SmallText>
            <Button>
                <Image src={iphone} />
                Get on Iphone
            </Button>
            <Button>
                <Image src={android} />
                Get on Android
            </Button>
        </div>
    )
}
export default FirstComponent


const Image = styled.img`
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;


`


const BigText = styled.div`
    font-weight: 500;
    font-size: 70px;
    margin: 12px 15px;
    color: #122231;




`
const SmallText = styled.div`
    //font-weight: 10;
    font-size: 15px;
    margin: 12px 15px;
    color: #37424C;

    


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