import styled from "styled-components";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { TextField } from "@mui/material";

export const ContentCard = styled.div`
  display: flex;
  background-color: White;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 640px;
  padding: 32px;
  margin: 0;
  margin-top: 64px;
  flex-direction: column;
`;

export const InputSection = styled.form`
  display: flex;
  flex-direction: row;
  padding-top: 16px;
`;
export const SocialLogins = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 24px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-bottom: 16px;
`;
export const LineContainer = styled.div`
  display: flex;
  width: 1px;
  background-color: lightGray;
  margin: 0px 32px 0px 32px;
`;

export const Texting = styled.p`
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.5px;
  padding-left: 12px;
`;
export const Title = styled.p`
  font-weight: 600;
  font-size: 20px;
`;
export const Link = styled.a`
  text-decoration: none;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.4px;
  color: #4a0baf;
  margin: 8px 0px 8px 0px;
`;
export const Invalid = styled.p`
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: red;
  margin: 8px 0px 8px 0px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const TabItem = styled(Tab)`
  padding: 8px;
  text-align: left;
  display: flex;
  justify-content: center;
  alignitems: flex-start;
  margin: 2px;
  min-width: 10px;
  min-height: 10px;
  margin-left: 0px;
  text-transform: none;
`;
export const MuiTab = styled(Tabs)`
  min-height: 0px;
`;
export const TimerContainer = styled.p`
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  letter-spacing: 0.5px;
  margin: 16px 0 0 0;
  text-align: center;
`;
export const ServerErrorContainer = styled.div`
  padding-bottom: 12px;
  margin-right: 20px;
`;
export const ResendNow = styled.a`
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  letter-spacing: 0.5px;
  margin: 16px 0 0 0;
  text-align: center;
  cursor: pointer;
`;
export const ContentContainer = styled.div`
  max-height: 240px;
  width: 100%;
  padding-right: 20px;
  overflow-y: auto;
  background-color: White;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: LightGray;
  }
  ::-webkit-scrollbar-thumb {
    width: 10px;
    background-color: Gray;
    height: 5px;
    border-radius: 10px;
  }
`;
export const SocialLoginContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;
export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 320px;
`;

export const Input = styled(TextField)`
  & .MuiOutlinedInput-root {
    margin: 10px 2px;
    border-radius: 4px;
    font-size: 14px;
  }

  & .MuiOutlinedInput-notchedOutline {
    border: 1px solid #ccc;
  }

  & .MuiOutlinedInput-input {
    padding: 12px;
  }
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #4624a7;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #4a0baf;
  }
`;
export const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-top: -8px;
  margin-bottom: 8px;
`;
