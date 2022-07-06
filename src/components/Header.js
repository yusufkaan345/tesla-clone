import React,{useState} from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {selectCars} from "../features/carSlice/carSlice"
import { useSelector } from "react-redux";

export default function Header() {

  const [burgerStatus,setBurgerStatus]=useState(false);
  const cars=useSelector(selectCars)
  return (
    <Container>
      <Logo>
        <a href="/#">
          <img src="./images/logo.svg" alt=""></img>
        </a>
      </Logo>
      <Menu>
        {cars &&cars.map((car,index)=>
            <a href="/#" key={index}> {car}</a>
        )}
        
      </Menu>
      <RightMenu>
        <a href="/#">Shop</a>
        <a href="/#">Tesla Account</a>
        <CustomMenu onClick={()=>setBurgerStatus(true)}></CustomMenu>
      </RightMenu>

      <BurgerNav show={burgerStatus}>
        <CustomClose onClick={()=>setBurgerStatus(false)}></CustomClose>
        {cars &&cars.map((car,index)=>
            <li><a href="/#" key={index}> {car}</a></li>
        )}
        <li>
          <a href="/#"> Existing Inventory</a>
        </li>
        <li>
          <a href="/#"> Used Inventory</a>
        </li>
        <li>
          <a href="/#"> Trade-in</a>
        </li>
        <li>
          <a href="/#"> Cybertruck</a>
        </li>
        <li>
          <a href="/#"> Roadaster</a>
        </li>
        <li>
          <a href="/#"> Existing Inventory</a>
        </li>
        <li>
          <a href="/#"> Existing Inventory</a>
        </li>
        <li>
          <a href="/#"> Existing Inventory</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 60px;
  position: fixed;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap;
  }
  @media (max-width: 1050px) {
    display: none;
  }
`;
const Logo = styled.div``;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 10;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform:${props=>props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition:0.4s;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;
const CustomClose = styled(CloseIcon)`
  position: fixed;
  cursor: pointer;
  top: 15px;
  right: 15px;
`;
