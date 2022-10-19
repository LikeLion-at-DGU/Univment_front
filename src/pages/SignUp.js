import React, { useState } from "react";
import {
  Button,
  CssBaseline,
  TextField,
  FormControl,
  FormControlLabel,
  Checkbox,
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
    rePassword: "",
    checked: false,
  });

  // 인풋 에러 관리
  const [errors, setErrors] = useState({
    idError: "",
    emailError: "",
    passwordError: "",
    rePasswordError: "",
    registerError: "",
  });

  // 회원가입 동의 체크박스 관리
  const handleAgree = (e) => {
    setInputs({
      ...inputs,
      checked: e.target.checked,
    });
  };

  // Boxs Form 버튼 클릭 시 실행
  const onSubmit = (e) => {
    e.preventDefault();
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
                    error={errors.idError !== "" || false}
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
                    error={errors.emailError !== "" || false}
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
                    error={inputs.password !== "" || false}
                  />
                </Grid>
                <FormHelperTexts>{inputs.password}</FormHelperTexts>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    type="password"
                    id="rePassword"
                    name="rePassword"
                    label="비밀번호 재입력"
                    error={errors.passwordError !== "" || false}
                  />
                </Grid>
                <FormHelperTexts>{errors.passwordError}</FormHelperTexts>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox onChange={handleAgree} color="primary" />
                    }
                    label="Univment 회원가입에 동의합니다."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: "#383b3d" }}
                size="large"
                style={{ height: "5.5vh" }}
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
