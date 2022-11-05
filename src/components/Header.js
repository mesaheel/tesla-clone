import React, { useState } from 'react'
import styled from "styled-components";
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars)
    return (

    <Container>
        <a>
            <img src='/images/logo.svg' alt='Tesla Logo' />
        </a>
        <Menu>
            {cars && cars.map((car, index)=>(
                <a key={index} href="#">{car}</a>
            ))}
        </Menu>
        <RightMenu>
            <a href="#" className='shop'>Shop</a>
            <a href="#" className='shop'>Account</a>
            <CustomMenu onClick={()=> setBurgerStatus(true)}>
            <a href="#">Menu</a>
            </CustomMenu>
        </RightMenu>
        <BurgerNav show = {burgerStatus}>
            <CloseWrapper>
                  <CustomClose onClick={()=> setBurgerStatus(false)}/>
            </CloseWrapper>

            {cars && cars.map((car, index)=>(
                <li key={index} ><a href="#">{car}</a></li>
            ))}

            <li><a href="#">Existing Inventory</a></li>
            <li><a href="#">Used Inventory</a></li>
            <li><a href="#">Trade-In</a></li>
            <li><a href="#">Test Drive</a></li>
            <li><a href="#">Insurance</a></li>
            <li><a href="#">Cybertruck</a></li>
            <li><a href="#">Roadster</a></li>
            <li><a href="#">Semi</a></li>
            <li><a href="#">Charging</a></li>
            <li><a href="#">Powerwall</a></li>
            <li><a href="#">Commercial Energy</a></li>
            <li><a href="#">Utilities</a></li>
            <li><a href="#">Find Us</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Investor Relations</a></li>
        </BurgerNav>



    </Container>   
  )
}

export default Header

const Container = styled.div`
        min-height: 60px;
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;

`
const Menu = styled.div`

        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;

        a {
            font-weight: 550;
            padding: 0 10px;
        }
        a:hover {
            background-color: #E0E0E0;
            border-radius: 5px;
        }

        @media(max-width: 900px) {
            display: none;
        }

`
const RightMenu = styled.div`
        display: flex;
        align-items: center;

        a {
            font-weight: 550;
            margin-right: 10px;
        }
        a:hover {
            background-color: #E0E0E0;
            border-radius: 5px;
            justify-content: center;
        }
        
        .shop {
            @media(max-width: 900px) {
            display: none;
        }
        }
`
const CustomMenu = styled.div`
        @media(max-width: 900px) {
            background-color: #E0E0E0;
            border-radius: 5px;
            height: 25px;
            width: 100px;
            justify-content: center;
        }
`

const BurgerNav = styled.div`
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        background: white;
        width: 300px;
        z-index: 16;
        list-style: none;
        padding: 40px;
        display: flex;
        flex-direction: column;
        text-align: start;
        transform: ${props => props.show ? 'translateX(0)' : 'translate(100%)'};
        transition: transform 0.2s;
        li {
            padding: 15px 0;

            a {
                font-weight: 550;
            }
        }

`

const CustomClose = styled(CloseIcon)`
        cursor: pointer;
`

const CloseWrapper = styled.div`
        display: flex;
        justify-content: end;
`