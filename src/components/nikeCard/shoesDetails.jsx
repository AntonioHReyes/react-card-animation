import react from "react";
import styled from "styled-components";
import {Marginer} from "../marginer";

import NikeImg from '../../assets/nike-logo.png'

export const ShoesDetails = (props) => {
    return <DetailsContainer>
        <SmallText>Nike Air</SmallText>
        <SpaceHorizontalContainer>
            <MediumText>Air Jorndan 1 mid</MediumText>
            <MediumText>$856 MXN</MediumText>
        </SpaceHorizontalContainer>
        <Marginer direction="vertical" margin="1.2em"/>
        <SpaceHorizontalContainer>
            <MediumText>your next shoes</MediumText>
            <BuyButton>Buy</BuyButton>
        </SpaceHorizontalContainer>
        <NikeLogo>
            <img src={NikeImg}/>
        </NikeLogo>
    </DetailsContainer>
}

const DetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.5em 6px 0 6px;
  line-height: 1.4;
`;

const MediumText = styled.span`
  font-size: 18px;
  color: #fff;
  font-weight: 800;
  text-transform: uppercase;
`;

const SmallText = styled.span`
  font-size: 11px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
`;

const SpaceHorizontalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const BuyButton = styled.button`
  padding: 10px 16px;
  background-color: #fbbe01;
  color: #000;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  border: 3px solid transparent;
  outline: none;
  cursor: pointer;
  transition: all 290ms ease-in-out;
  border-radius: 8px;
  
  &:hover{
    background-color: transparent;
    color: #fff;
    border: 3px solid #fbbe01;
  }
`;

const NikeLogo = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  
  img {
    width: auto;
    height: 13px;
  }
`;

