import { createPortal } from "react-dom";
import {
  LoaderContainer,
  LoaderContent,
  LoadingSpinner,
  LoadingSpinner2,
  LoadingText,
  ModalContainer,
} from "./Loader.styles";
import { useRef, useState } from "react";

function useLoader() {
  const loaderInstances = useRef({});
  const [popupStatus, setPopupStatus] = useState(false);

  const enablePopup = (loaderId = "byDefault") => {
    if (!loaderInstances.current[loaderId]) {
      loaderInstances.current[loaderId] = true;
      setPopupStatus(Object.values(loaderInstances.current).includes(true));
    }
  };
  const disablePopup = (loaderId = "byDefault") => {
    if (loaderInstances.current[loaderId]) {
      loaderInstances.current[loaderId] = false;
      setPopupStatus(Object.values(loaderInstances.current).includes(true));
    }
  };
  const Loader = () => {
    return (
      <ModalContainer open={popupStatus} disableAutoFocus={true}>
        <LoaderContent>
          <LoaderContainer>
            <LoadingSpinner />
          </LoaderContainer>
          <LoaderContainer>
            <LoadingSpinner2 />
          </LoaderContainer>
        </LoaderContent>
      </ModalContainer>
    );
  };
  return [createPortal(<Loader />, document.body), enablePopup, disablePopup];
}

export const Loader = () => {
  return (
    <ModalContainer open={true}>
      <LoadingText>Loading...</LoadingText>
    </ModalContainer>
  );
};

export default useLoader;
