import styled, { css } from "styled-components";

export const Typography = () => css`
  font-family: Nunito;
  font-size: 20px;
  font-weight: 900;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: center;
  text-transform: uppercase;
`;

type ButtonProps = {
  primary?: boolean;
  secondary?: boolean;
};

export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px 20px;

  width: 100%;
  max-height: 50px;

  box-shadow: 4px 8px 0px #000000;
  border-radius: 10px;
  border: solid black;
  border-width: 4px;

  background-color: ${(props) => {
    if (props.secondary) {
      return "#A5663C";
    }

    return "#FFB864";
  }};

  transition: 0.1s all linear;

  ${Typography()}

  :active {
    background-color: ${(props) => {
      if (props.secondary) {
        return "#89563A";
      }

      return "#F4A651";
    }};

    box-shadow: 2px 4px 0px #000000;
  }
`;
