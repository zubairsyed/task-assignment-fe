import { Modal } from "@mui/material";
import styled, { keyframes } from "styled-components";

export const ModalContainer = styled(Modal)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  outline: none;
  z-index: 2000;
`;
export const LoadingText = styled.p`
  color: white;
`;
const animloader = keyframes`
  0%   { height: 40px} 
  50%   { height: 20px} 
  100% { height: 4px}
`;
export const LoaderContainer = styled.div`
  width: 40px;
`;
export const LoaderContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LoadingSpinner = styled.span`
  width: 8px;
  height: 40px;
  border-radius: 4px;
  display: block;
  margin: 20px auto;
  position: relative;
  background: white;
  color: white;
  box-sizing: border-box;
  animation: ${animloader} 0.5s 0.5s linear infinite alternate;
  &:after {
    content: "";
    width: 8px;
    height: 20px;
    border-radius: 4px;
    background: white;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 20px;
    box-sizing: border-box;
    animation: ${animloader} 0.45s 0.55s linear infinite alternate;
  }
  &:before {
    content: "";
    width: 8px;
    height: 40px;
    border-radius: 4px;
    background: white;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 20px;
    box-sizing: border-box;
    animation: ${animloader} 0.5s 0.65s linear infinite alternate;
    left: -20px;
    animation-delay: 0s;
  }
`;
export const LoadingSpinner2 = styled.span`
  width: 8px;
  height: 40px;
  border-radius: 4px;
  display: block;
  margin: 20px auto;
  position: relative;
  background: white;
  color: white;
  box-sizing: border-box;
  animation: ${animloader} 0.5s 0.65s linear infinite alternate;
`;
