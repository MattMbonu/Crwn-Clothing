import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const OptionStyles = css`
  padding: 1rem 1.5rem;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0.5rem 1rem 2rem rgba(119, 119, 119, 0.3);
  }
  &:active {
    transform: translateY(0px);
  }
`;

export const HeaderContainer = styled.div`
  height: 7rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 7rem;
  padding: 2.5rem;
  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
  & > * {
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0.5rem 1rem 2rem rgba(119, 119, 119, 0.3);
    }
    &:active {
      transform: translateY(0px);
    }
  }
`;

export const OptionsContainer = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  text-transform: uppercase;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const OptionLink = styled(Link)`
  ${OptionStyles}
`;

export const OptionDiv = styled.div`
  ${OptionStyles}
`;
