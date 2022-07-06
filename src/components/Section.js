import React from "react";
import styled from "styled-components";
const Fade = require("react-reveal/Fade");
function Section(props) {
  return (
    <Wrap bg={props.img}>
      <Fade bottom>
        <ItemText>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </ItemText>
      </Fade>

      <Buttons>

        <Fade bottom>
          <ButtonGroup>

            <LeftButton>{props.leftButtonText}</LeftButton>

            {props.rightButtonText && (<RightButton>{props.rightButtonText}</RightButton> )}

          </ButtonGroup>
        </Fade>

        <DownArrow src="./images/down-arrow.svg"></DownArrow>
      </Buttons>
    </Wrap>
  );
}

export default Section;
const Wrap = styled.div`

  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url(../../images/${props.bg})`};
`;
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
 
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 1050px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  color: black;
  background-color: #fff;
  opacity: 0.65;
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
`;
const Buttons = styled.div``;
