import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const StyledDiv = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
`;

export const CardDiv = styled.div`
  padding: 3em;
  width: 20%;
  text-align: left;
  color: white;
  &:nth-child(1) button {
    color: #e28525;
    &:hover {
      color: white;
      background-color: transparent;
    }
  }
  &:nth-child(2) button {
    color: #016972;
    &:hover {
      color: white;
      background-color: transparent;
    }
  }
  &:nth-child(3) button {
    color: #00403f;
    &:hover {
      color: white;
      background-color: transparent;
    }
  }
  &:nth-child(1) {
    border-radius: 10px 0 0 10px;
    background-color: #e28525;
  }
  &:nth-child(2) {
    background-color: #016972;
  }
  &:nth-child(3) {
    background-color: #00403f;
    border-radius: 0 10px 10px 0;
  }
`;

export const StyledButton = styled.button`
  background-color: white;
  padding: 1em 2em;
  border-radius: 30px;
  margin-top: 6em;
  border: white 3px solid;
  font-weight: bold;
`;
