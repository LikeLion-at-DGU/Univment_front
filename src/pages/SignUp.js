import React, { useCallback, useState } from "react";
import {
  Button,
  CssBaseline,
  TextField,
  FormControl,
  FormHelperText,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material/";
import Header from "../components/Header";
import styled from "styled-components";

const FormHelperTexts = styled(FormHelperText)`
  width: 100%;
  padding-left: 16px;
  font-weight: 700 !important;
  color: #d32f2f !important;
`;

const Boxs = styled(Box)`
  padding-bottom: 40px !important;
`;

const SignUp = () => {
  // 인풋 상태 관리
  const [inputs, setInputs] = useState({
    id: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const { id, email, password, passwordConfirm } = inputs;

  // 인풋 에러 관리
  const [errors, setErrors] = useState({
    idError: "",
    emailError: "",
    passwordError: "",
    passwordConfirmError: "",
  });

  // 유효성 검사
  const [validation, setValidation] = useState({
    isId: false,
    isEmail: false,
    isPassword: false,
    isPasswordConfirm: false,
  });
  const { isId, isEmail, isPassword, isPasswordConfirm } = validation;

  // Id 유효성 관리
  const onChangeId = useCallback(
    (e) => {
      const idRegex = /^[a-zA-Z\\d`~!@#$%^&*()-_=+]{4,20}$/;
      if (!idRegex.test(id) || id.length < 1)
        setErrors({
          ...errors,
          idError:
            "숫자, 알파벳 및 숫자와 관련된 특수문자 조합의 올바른 아이디를 입력해주세요. 글자수 제한[4~20]",
        });
      else
        setErrors({
          ...errors,
          idError: "올바른 아이디 형식입니다.",
        });
      const { value, name } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [id]
  );

  // Email 유효성 관리
  const onChangeEmail = useCallback(
    (e) => {
      const emailRegex =
        /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
      const { value, name } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
      if (!emailRegex.test(email)) {
        setErrors({
          ...errors,
          emailError: "이메일 형식을 다시 확인해주세요",
        });
        setValidation({
          ...validation,
          isEmail: false,
        });
      } else {
        setErrors({
          ...errors,
          emailError: "올바른 이메일 형식입니다.",
        });
        setValidation({
          ...validation,
          isEmail: true,
        });
      }
    },
    [email]
  );

  // 비밀번호 유효성 관리
  const onChangePassword = useCallback(
    (e) => {
      const passwordRegex =
        /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
      setInputs({
        ...inputs,
        password: e.target.value,
      });
      if (!passwordRegex.test(password)) {
        setErrors({
          ...errors,
          passwordError:
            "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요.",
        });
        setValidation({
          ...validation,
          isPassword: false,
        });
      } else {
        setErrors({
          ...errors,
          passwordError: "안전한 비밀번호입니다.",
        });
        setValidation({
          ...validation,
          isPassword: true,
        });
      }
    },
    [password]
  );

  // 비밀번호 확인 유효성 관리
  const onChangePasswordConfirm = useCallback(
    (e) => {
      setInputs({
        ...inputs,
        passwordConfirm: e.target.value,
      });
      if (password === passwordConfirm) {
        setErrors({
          ...errors,
          passwordConfirmError: "비밀번호를 똑같이 입력했어요.",
        });
        setValidation({
          ...validation,
          isPasswordConfirm: true,
        });
      } else {
        setErrors({
          ...errors,
          passwordConfirmError: "비밀번호가 틀려요. 다시 확인해주세요.",
        });
        setValidation({
          ...validation,
          isPasswordConfirm: false,
        });
      }
    },
    [passwordConfirm]
  );

  // Boxs Form 버튼 클릭 시 실행
  const onSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const joinData = {
      id: data.get("id"),
      email: data.get("email"),
      password: data.get("password"),
      passwordConfirm: data.get("passwordConfirm"),
    };
    const { id, email, password, rePassword } = joinData;
    console.log(joinData);
  };

  const onPost = async (data) => {
    console.log("회원가입 포스트 정상 신청", data);
  };

  return (
    <>
      <Header />
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minHeight: "70vh",
          }}
        >
          <Typography
            component="h1"
            variant="h5"
            fontFamily="AppleSDGothicNeoB00"
          >
            회원가입을 진행해주세요
          </Typography>
          <Boxs component="form" noValidate onSubmit={onSubmit} sx={{ mt: 3 }}>
            <FormControl component="fieldset" variant="standard">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoFocus
                    required
                    fullWidth
                    id="id"
                    name="id"
                    label="아이디"
                    onChange={onChangeId}
                    // error={errors.idError !== "" || false}
                  />
                </Grid>
                <FormHelperTexts>{errors.idError}</FormHelperTexts>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    type="email"
                    id="email"
                    name="email"
                    label="이메일 주소"
                    onChange={onChangeEmail}
                    // error={errors.emailError !== "" || false}
                  />
                </Grid>
                <FormHelperTexts>{errors.emailError}</FormHelperTexts>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    type="password"
                    id="password"
                    name="password"
                    label="비밀번호 (숫자+영문자+특수문자 8자리 이상)"
                    onChange={onChangePassword}
                    // error={password !== "" || false}
                  />
                </Grid>
                <FormHelperTexts>{errors.passwordError}</FormHelperTexts>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    type="password"
                    id="passwordConfirm"
                    name="passwordConfirm"
                    label="비밀번호 재입력"
                    onChange={onChangePasswordConfirm}
                    // error={errors.passwordError !== "" || false}
                  />
                </Grid>
                <FormHelperTexts>{errors.passwordConfirmError}</FormHelperTexts>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: "#383b3d" }}
                size="large"
                style={{ height: "5.5vh" }}
                disabled={!(isId && isEmail && isPassword && isPasswordConfirm)}
              >
                회원가입 완료
              </Button>
            </FormControl>
            <FormHelperTexts>{errors.registerError}</FormHelperTexts>
          </Boxs>
        </Box>
      </Container>
    </>
  );
};

export default SignUp;
