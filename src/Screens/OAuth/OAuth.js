import React from "react";
import axios from "axios";
import { useCallback, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IconButton, InputAdornment } from "@mui/material";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import {
  InputSection,
  Container,
  InputContainer,
  TabItem,
  MuiTab,
  LoginForm,
  Input,
  Button,
  ErrorMessage,
} from "./OAuth.styles";
import { getTimezone } from "../../Utils/Functional";
import { AppContext, RouterPaths } from "../../App";
import { defaultBaseUrl, endpoints } from "../../Network/endPoints";
import { ids, lg, Regex } from "../../Constants";

const TabTypes = {
  SIGN_IN: "sign-in",
  SIGN_UP: "sign-up",
};

export const OAuth = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [selectedTab, setSelectedTab] = useState(TabTypes.SIGN_IN);
  const [signInServerError, setSignInServerError] = useState("");
  const contextInfo = useContext(AppContext);

  const signIn = useCallback(
    (body = {}) => {
      axios({
        method: "post",
        baseURL: defaultBaseUrl,
        url: endpoints.login,
        data: body,
        headers: { "X-Timezone": getTimezone() },
      })
        .then((res) => {
          const token = res?.data?.message?.accessToken;
          if (token) {
            localStorage.setItem(ids.storeAuth, token);
          }
          navigate(`/${RouterPaths.welcome}`, { replace: true });
        })
        .catch((e) => {
          setSignInServerError(
            e?.response?.data?.message || lg.generic.genericError
          );
        })
        .finally(() => {
          contextInfo.hideLoader();
        });
    },
    [contextInfo, navigate]
  );

  const onClearInvalidError = useCallback(() => {
    setSignInServerError("");
  }, []);

  const clearForm = useCallback(() => {
    reset({
      email_id: "",
      password: "",
      name: "",
      otp: "",
    });
    onClearInvalidError();
    setShowPassword(false);
  }, [onClearInvalidError, reset]);

  const signUp = useCallback(
    (body = {}) => {
      axios({
        method: "post",
        baseURL: defaultBaseUrl,
        url: endpoints.signup,
        data: body,
        headers: { "X-Timezone": getTimezone() },
      })
        .then((res) => {
          alert(res?.data?.message);
        })
        .catch((e) => {
          setSignInServerError(e?.response?.data || lg.generic.genericError);
        })
        .finally(() => {
          contextInfo.hideLoader();
        });
    },
    [contextInfo]
  );
  const onSignInClick = useCallback(() => {
    const values = getValues();
    signIn({
      email: values.email_id,
      password: values.password,
    });
  }, [getValues, signIn]);

  const onSignUpClick = useCallback(() => {
    const values = getValues();
    signUp({
      name: values.name,
      email: values.email_id,
      password: values.password,
    });
  }, [getValues, signUp]);

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  const onTabClick = useCallback(
    (event, newValue) => {
      clearForm();
      setSelectedTab(newValue);
    },
    [clearForm]
  );

  const onFormSubmitClick = async () => {
    setSignInServerError("");
    try {
      contextInfo.showLoader();
      if (selectedTab === TabTypes.SIGN_IN) {
        onSignInClick();
      } else {
        onSignUpClick();
      }
    } catch (e) {
      alert(lg.generic.hardStopErrorMsg);
      contextInfo.hideLoader();
    }
  };

  const signInForm = () => {
    const formEmailText = lg.login.emailForm;
    const formPassText = lg.login.passForm;
    return (
      <InputContainer>
        <Input
          type={formEmailText.type}
          placeholder={formEmailText.placeholder}
          {...register(formEmailText.trackingId, {
            required: formEmailText.requiredMsg,
            minLength: {
              value: 3,
              message: formEmailText.errorMsg,
            },
            pattern: {
              value: Regex.validEmail,
              message: formEmailText.errorValidEmail,
            },
          })}
          onFocus={onClearInvalidError}
          error={!!errors.email_id}
          helperText={errors?.email_id?.message}
        />

        <Input
          type={
            showPassword ? formPassText.typeText : formPassText.typePassword
          }
          placeholder={formPassText.placeholder}
          {...register(formPassText.trackingId, {
            required: formPassText.requiredMsg,
            minLength: {
              value: 4,
              message: formPassText.errorMsg,
            },
          })}
          onFocus={onClearInvalidError}
          error={!!errors.password}
          helperText={errors.password?.message}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  size="small"
                  onClick={togglePasswordVisibility}
                  edge="end"
                >
                  {!showPassword ? (
                    <VisibilityOffOutlinedIcon />
                  ) : (
                    <VisibilityOutlinedIcon />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {signInServerError && <ErrorMessage>{signInServerError}</ErrorMessage>}
        <Button type="submit">{lg.login.signIn}</Button>
      </InputContainer>
    );
  };

  const signUpForm = () => {
    const formEmailText = lg.login.emailForm;
    const formPassText = lg.login.passForm;
    const formNameText = lg.login.nameForm;
    return (
      <InputContainer>
        <Input
          type={formNameText.type}
          placeholder={formNameText.placeholder}
          {...register(formNameText.trackingId, {
            required: formNameText.requiredMsg,
            minLength: {
              value: 3,
              message: formNameText.errorMsg,
            },
            pattern: {
              value: Regex.name,
              message: formNameText.errorValidName,
            },
          })}
          onFocus={onClearInvalidError}
          error={!!errors.name}
          helperText={errors?.name?.message}
        />
        <Input
          type={formEmailText.type}
          placeholder={formEmailText.placeholder}
          {...register(formEmailText.trackingId, {
            required: formEmailText.requiredMsg,
            minLength: {
              value: 3,
              message: formEmailText.errorMsg,
            },
            pattern: {
              value: Regex.validEmail,
              message: formEmailText.errorValidEmail,
            },
          })}
          onFocus={onClearInvalidError}
          error={!!errors.email_id}
          helperText={errors?.email_id?.message}
        />

        <Input
          type={
            showPassword ? formPassText.typeText : formPassText.typePassword
          }
          placeholder={formPassText.placeholder}
          {...register(formPassText.trackingId, {
            required: formPassText.requiredMsg,
            minLength: {
              value: 4,
              message: formPassText.errorMsg,
            },
          })}
          onFocus={onClearInvalidError}
          error={!!errors.password}
          helperText={errors.password?.message}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  size="small"
                  onClick={togglePasswordVisibility}
                  edge="end"
                >
                  {!showPassword ? (
                    <VisibilityOffOutlinedIcon />
                  ) : (
                    <VisibilityOutlinedIcon />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {signInServerError && <ErrorMessage>{signInServerError}</ErrorMessage>}
        <Button type="submit">{lg.login.signUp}</Button>
      </InputContainer>
    );
  };

  return (
    <Container>
      <LoginForm>
        <MuiTab value={selectedTab} onChange={onTabClick}>
          <TabItem
            id={TabTypes.SIGN_IN}
            label={lg.login.signIn}
            value={TabTypes.SIGN_IN}
          />
          <TabItem
            id={TabTypes.SIGN_UP}
            label={lg.login.signUp}
            value={TabTypes.SIGN_UP}
          />
        </MuiTab>

        <InputSection id="auth" onSubmit={handleSubmit(onFormSubmitClick)}>
          {selectedTab === TabTypes.SIGN_IN && signInForm()}
          {selectedTab === TabTypes.SIGN_UP && signUpForm()}
        </InputSection>
      </LoginForm>
    </Container>
  );
};
export default OAuth;
