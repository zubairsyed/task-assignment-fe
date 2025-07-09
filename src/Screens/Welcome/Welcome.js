import { useCallback, useContext, useState } from "react";
import { getAxios } from "../../Network/core";
import { Container, SuccessMessage, ErrorMessage } from "./Welcome.styles";
import Button from "@mui/material/Button";
import { AppContext } from "../../App";
import { defaultBaseUrl, endpoints } from "../../Network/endPoints";

const MAX_APIS_TRIGGER = 200;
export const WelcomeScreen = () => {
  const contextInfo = useContext(AppContext);
  const [success, setSuccess] = useState(0);
  const [error, setError] = useState(0);
  const [lastErrorMsg, setLastErrorMsg] = useState("");

  const sendMultipleRequests = useCallback(() => {
    contextInfo.showLoader();
    setSuccess(0);
    setError(0);
    setLastErrorMsg("");
    for (let i = 0; i < MAX_APIS_TRIGGER; i++) {
      getAxios()
        .get(`${defaultBaseUrl}${endpoints.test}`, {})
        .then((res) => {
          setSuccess((prev) => prev + 1);
        })
        .catch((e) => {
          setError((prev) => prev + 1);
          setLastErrorMsg(e.message);
        })
        .finally(() => {});
    }
    contextInfo.hideLoader();
  }, [contextInfo]);

  return (
    <Container>
      <SuccessMessage>Apis success requests count {success}</SuccessMessage>
      <ErrorMessage>Apis failed requests count {error}</ErrorMessage>
      <ErrorMessage> {lastErrorMsg}</ErrorMessage>

      <Button
        variant="contained"
        color="primary"
        onClick={sendMultipleRequests}
      >
        Send {MAX_APIS_TRIGGER} requests
      </Button>
    </Container>
  );
};
export default WelcomeScreen;
