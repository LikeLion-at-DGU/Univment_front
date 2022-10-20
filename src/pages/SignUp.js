import React, { useCallback, useState } from "react";
import { Button, CssBaseline, TextField, FormControl, FormHelperText, Grid, Box, Typography, Container } from "@mui/material/";
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
  //이름, 이메일, 비밀번호, 비밀번호 확인
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  //오류메시지 상태저장
  const [nameMessage, setNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");

  // 유효성 검사
  const [isName, setIsName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  // Name 유효성 관리
  const onChangeName = useCallback((e) => {
    const nameRegex = /^(?=.*[a-zA-Z0-9가-힣])[a-zA-Z0-9가-힣]{1,10}$/;
    const nameCurrent = e.target.value;
    setName(nameCurrent);
    if (!nameRegex.test(nameCurrent)) {
      setNameMessage("한글 또는 영문자만 가능합니다.[1~10글자]");
      setIsName(false);
    } else {
      setNameMessage("올바른 이름 형식입니다");
      setIsName(true);
    }
  }, []);

  // Email 유효성 관리
  const onChangeEmail = useCallback((e) => {
    const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage("이메일 형식이 틀렸습니다");
      setIsEmail(false);
    } else {
      setEmailMessage("올바른 이메일 형식입니다");
      setIsEmail(true);
    }
  }, []);

  // 비밀번호 유효성 관리
  const onChangePassword = useCallback((e) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage("숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요");
      setIsPassword(false);
    } else {
      setPasswordMessage("안전한 비밀번호입니다");
      setIsPassword(true);
    }
  }, []);

  // 비밀번호 확인 유효성 관리
  const onChangePasswordConfirm = useCallback(
    (e) => {
      const passwordConfirmCurrent = e.target.value;
      setPasswordConfirm(passwordConfirmCurrent);

      if (password === passwordConfirmCurrent) {
        setPasswordConfirmMessage("비밀번호를 똑같이 입력했어요");
        setIsPasswordConfirm(true);
      } else {
        setPasswordConfirmMessage("비밀번호가 틀렸습니다. 다시 확인해주세요");
        setIsPasswordConfirm(false);
      }
    },
    [password]
  );

  // Boxs Form 버튼 클릭 시 실행
  const onSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const joinData = {
      nickname: data.get("nickname"),
      email: data.get("email"),
      password: data.get("password"),
      passwordConfirm: data.get("passwordConfirm"),
    };
    const { nickname, email, password, passwordConfirm } = joinData;
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
          <Typography component="h1" variant="h5" fontFamily="AppleSDGothicNeoB00">
            회원가입을 진행해주세요
          </Typography>
          <Boxs
            component="form"
            noValidate
            onSubmit={onSubmit}
            sx={{
              mt: 3,
            }}
          >
            <FormControl component="fieldset" variant="standard">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField autoFocus required fullWidth id="name" name="name" label="이름" onChange={onChangeName} />
                </Grid>
                <FormHelperTexts>{nameMessage}</FormHelperTexts>
                <Grid item xs={12}>
                  <TextField required fullWidth type="email" id="email" name="email" label="이메일 주소" onChange={onChangeEmail} />
                </Grid>
                <FormHelperTexts>{emailMessage}</FormHelperTexts>
                <Grid item xs={12}>
                  <TextField required fullWidth type="password" id="password" name="password" label="비밀번호 (숫자+영문자+특수문자 8자리 이상)" onChange={onChangePassword} />
                </Grid>
                <FormHelperTexts>{passwordMessage}</FormHelperTexts>
                <Grid item xs={12}>
                  <TextField required fullWidth type="password" id="passwordConfirm" name="passwordConfirm" label="비밀번호 재입력" onChange={onChangePasswordConfirm} />
                </Grid>
                <FormHelperTexts>{passwordConfirmMessage}</FormHelperTexts>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  bgcolor: "#383b3d",
                }}
                size="large"
                style={{
                  height: "5.5vh",
                }}
                disabled={!(isName && isEmail && isPassword && isPasswordConfirm)}
              >
                회원가입 완료
              </Button>
            </FormControl>
          </Boxs>
        </Box>
      </Container>
    </>
  );
};

export default SignUp;
