import styled from "styled-components";
import { TextField } from "@mui/material";

export const Container = styled.div`
  display: flex;
  background-color: White;
  width: 100vw;
  padding: 32px;
  margin: 0;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const SuccessMessage = styled.p`
  color: green;
  font-size: 18px;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 18px;
`;
