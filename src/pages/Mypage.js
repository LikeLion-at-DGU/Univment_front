import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import { Button, Container, Grid, Typography } from "@mui/material/";
import styles from "../static/css/Mypage.module.css";
import DefaultImg from "../components/DefaultImg";
import Logout from "../components/Logout";
import axios from "axios";
import BasicModal from "../components/BasicModal";
import CategoryModal from "../components/CategoryModal";
import { AuthContext } from "../context/AuthContext";
import ClubModal from "../components/ClubModal";
import ContestModal from "../components/ContestModal";
import ProjectModal from "../components/ProjectModal";
import { useNavigate } from "react-router-dom";
import { removeCookie } from "../components/cookie";
import { Instance } from "../components/Instance";

const Mypage = () => {
  const id = localStorage.getItem("id");
  const navigate = useNavigate();
  const { category, setCategory, setIsLoggedIn } = useContext(AuthContext);
  // Profile
  const [profile, setProfile] = useState({
    user: id,
    myname: "",
    email: "",
    major: "",
    image: null,
    club1: "",
    club2: "",
    club3: "",
    club4: "",
    club5: "",
    contest1: "",
    contest2: "",
    contest3: "",
    contest4: "",
    contest5: "",
    project1: "",
    project2: "",
    project3: "",
    project4: "",
    project5: "",
  });
  const [imgLoading, setImgLoading] = useState(false);

  // Modal
  const [basicModal, setBasicModal] = useState(false);
  const [categoryModal, setCategoryModal] = useState(false);
  const [clubModal, setClubModal] = useState(false);
  const [contestModal, setContestModal] = useState(false);
  const [projectModal, setProjectModal] = useState(false);

  // Fetch
  const fetchData = async () => {
    try {
      const requestImg = await axios.get("http://54.180.165.166/auth/user/");
      const requestBasic = await axios.get("http://54.180.165.166/mypage/namecardprofile/");
      const requestClub = await axios.get("http://54.180.165.166/mypage/namecardclubs/");
      const requestContest = await axios.get("http://54.180.165.166/mypage/namecardcontests/");
      const requestProject = await axios.get("http://54.180.165.166/mypage/namecardprojects/");
      setProfile({
        ...profile,
        myname: requestBasic?.data[0]?.myname,
        email: requestBasic?.data[0]?.email,
        major: requestBasic?.data[0]?.major,
        image: requestImg?.data?.image,
        club1: requestClub?.data[0]?.club1,
        club2: requestClub?.data[0]?.club2,
        club3: requestClub?.data[0]?.club3,
        club4: requestClub?.data[0]?.club4,
        club5: requestClub?.data[0]?.club5,
        contest1: requestContest?.data[0]?.contest1,
        contest2: requestContest?.data[0]?.contest2,
        contest3: requestContest?.data[0]?.contest3,
        contest4: requestContest?.data[0]?.contest4,
        contest5: requestContest?.data[0]?.contest5,
        project1: requestProject?.data[0]?.project1,
        project2: requestProject?.data[0]?.project2,
        project3: requestProject?.data[0]?.project3,
        project4: requestProject?.data[0]?.project4,
        project5: requestProject?.data[0]?.project5,
      });
    } catch (error) {
      if (error.response.status === 403) {
        alert("사용자 정보를 찾을 수 없습니다. 다시 로그인해주세요.");
        localStorage.clear();
        console.clear();
        removeCookie("access-token");
        setIsLoggedIn(false);
        navigate("/signin");
      }
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Handling
  const onLoadFile = (e) => {
    const file = e.target.files[0];
    setProfile({
      ...profile,
      image: file,
    });
    setImgLoading(true);
  };

  const fileSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    if (profile?.image) {
      formData.append("image", profile.image);
    } else {
      window.alert("이미지를 첨부해주세요.");
      return;
    }
    setImgLoading(false);
    await axios
      .put("http://54.180.165.166/auth/user/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        alert("프로필 이미지 등록 성공");
        setProfile({
          ...profile,
          image: response.data.image,
        });
      })
      .catch((error) => {
        alert("프로필 이미지 등록 실패");
        console.log(error);
      });
  };
  const onDeleteBasic = (e) => {
    e.preventDefault();
    if (window.confirm("기본 정보를 삭제하시겠습니까?")) {
      axios
        .delete(`http://54.180.165.166/mypage/namecardprofile/${id}/`)
        .then(() => {
          setProfile({
            ...profile,
          });
          alert("기본 정보가 삭제되었습니다.");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      return;
    }
  };
  const onDeleteClub = (e) => {
    e.preventDefault();
    if (window.confirm("클럽(동아리) 목록을 삭제하시겠습니까?")) {
      axios
        .delete(`http://54.180.165.166/mypage/namecardclubs/${id}/`)
        .then((response) => {
          alert("클럽(동아리) 정보가 삭제되었습니다.");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      return;
    }
  };
  const onDeleteContest = (e) => {
    e.preventDefault();
    if (window.confirm("(경진)대회 목록을 삭제하시겠습니까?")) {
      axios
        .delete(`http://54.180.165.166/mypage/namecardcontests/${id}/`)
        .then((response) => {
          alert("(경진)대회 목록이 삭제되었습니다.");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      return;
    }
  };
  const onDeleteProject = (e) => {
    e.preventDefault();
    if (window.confirm("프로젝트 목록을 삭제하시겠습니까?")) {
      axios
        .delete(`http://54.180.165.166/mypage/namecardprojects/${id}/`)
        .then((response) => {
          alert("프로젝트 목록이 삭제되었습니다.");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      return;
    }
  };
  console.log(profile);
  return (
    <>
      <Header />
      <Logout />
      <Container component="main" maxWidth="md" sx={{ minHeight: "90vh" }}>
        <Grid container rowGap={4} justifyContent="space-between">
          {/* 프로필 그리드------------------------------------------------ */}
          <Grid
            item
            xs={12}
            sx={{
              borderBottom: "3px dashed #18264f",
              height: "30vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Button
              variant="contained"
              component="label"
              color="info"
              sx={{
                border: "1px solid #18264f",
                backgroundColor: "#18264f",
                color: "f0f0e4",
                fontFamily: "Jeju Myeongjo",
                position: "absolute",
                bottom: "1vh",
                height: "3vh",
              }}
            >
              첨부
              <input hidden accept="image/*" multiple type="file" onChange={onLoadFile} />
            </Button>
            <Button
              variant="contained"
              className={styles.basicBtn}
              sx={{
                color: "#fff",
                backgroundColor: "#18264f",
                border: "1px solid #18264f",
                fontFamily: "Jeju Myeongjo",
                position: "absolute",
              }}
              onClick={fileSubmit}
              // disabled={}
            >
              등록
            </Button>
            {imgLoading ? (
              <Grid
                container
                sx={{
                  border: "none",
                  borderRadius: 5,
                  width: "20vh",
                  height: "20vh",
                  boxShadow: "7px 5px 15px -7px rgba(0, 0, 0, 0.5)",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Jeju Myeongjo",
                    fontWeight: "bold",
                  }}
                >
                  이미지 등록 대기 중..
                </Typography>
              </Grid>
            ) : (
              <DefaultImg profileImage={profile.image} />
            )}
          </Grid>
          {/* 베이직 그리드------------------------------------------------ */}
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              border: "1px solid #18264f",
              borderRadius: 5,
              boxShadow: "7px 5px 15px -12px rgba(0, 0, 0, 0.5)",
              minHeight: "20vh",
              position: "relative",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Jeju Myeongjo",
                fontWeight: "bold",
                margin: "1vh 0 0 1.5vh",
              }}
            >
              기본 정보
            </Typography>
            <Typography sx={{ fontFamily: "Jeju Myeongjo", margin: "1vh 0 0 1.5vh" }}>
              {profile.myname
                ? "이름 : " + profile.myname
                : "이름, 전공, 컨택 이메일을 입력해주세요"}
            </Typography>
            <Typography sx={{ fontFamily: "Jeju Myeongjo", margin: "1vh 0 0 1.5vh" }}>
              {profile.email ? "컨택 이메일 : " + profile.email : ""}
            </Typography>
            <Typography sx={{ fontFamily: "Jeju Myeongjo", margin: "1vh 0 0 1.5vh" }}>
              {profile.major ? "전공 : " + profile.major : ""}
            </Typography>
            <Button
              variant="contained"
              className={styles.deleteBtn}
              sx={{
                color: "#fff",
                backgroundColor: "#18264f",
                border: "1px solid #383b3d",
                fontFamily: "Jeju Myeongjo",
                position: "absolute",
              }}
              onClick={onDeleteBasic}
            >
              삭제
            </Button>
            <Button
              variant="contained"
              className={styles.basicBtn}
              sx={{
                color: "#fff",
                backgroundColor: "#18264f",
                border: "1px solid #383b3d",
                fontFamily: "Jeju Myeongjo",
                position: "absolute",
              }}
              onClick={() => setBasicModal(true)}
            >
              등록
            </Button>
          </Grid>
          {basicModal && (
            <BasicModal setBasicModal={setBasicModal} profile={profile} setProfile={setProfile} />
          )}
          {/* 카테고리 그리드------------------------------------------------ */}
          <Grid
            item
            xs={12}
            md={6.7}
            sx={{
              border: "1px solid #18264f",
              borderRadius: 5,
              boxShadow: "7px 5px 15px -12px rgba(0, 0, 0, 0.5)",
              minHeight: "20vh",
              alignItems: "flex-end",
              position: "relative",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Jeju Myeongjo",
                fontWeight: "bold",
                margin: "1vh 0 0 1.5vh",
              }}
            >
              카테고리
            </Typography>
            {category.map((value, idx) => (
              <Button
                key={idx}
                variant="contained"
                sx={{
                  fontFamily: "Jeju Myeongjo",
                  margin: 0.8,
                  backgroundColor: value.color,
                }}
              >
                {value.name}
              </Button>
            ))}
            {categoryModal && <CategoryModal setCategoryModal={setCategoryModal} />}
            <Button
              variant="contained"
              className={styles.categoryBtn}
              sx={{
                color: "#fff",
                backgroundColor: "#18264f",
                border: "1px solid #383b3d",
                fontFamily: "Jeju Myeongjo",
                position: "absolute",
              }}
              onClick={() => setCategoryModal(true)}
            >
              수정
            </Button>
          </Grid>
          {/* 클럽 그리드------------------------------------------------ */}
          <Grid
            item
            xs={12}
            md={5.85}
            sx={{
              border: "1px solid #18264f",
              borderRadius: 5,
              boxShadow: "7px 5px 15px -12px rgba(0, 0, 0, 0.5)",
              minHeight: "20vh",
              position: "relative",
            }}
          >
            <Button
              variant="contained"
              className={styles.deleteBtn}
              sx={{
                color: "#fff",
                backgroundColor: "#18264f",
                border: "1px solid #383b3d",
                fontFamily: "Jeju Myeongjo",
                position: "absolute",
              }}
              onClick={onDeleteClub}
            >
              삭제
            </Button>
            <Button
              variant="contained"
              className={styles.clubBtn}
              sx={{
                color: "#fff",
                backgroundColor: "#18264f",
                border: "1px solid #383b3d",
                fontFamily: "Jeju Myeongjo",
                position: "absolute",
              }}
              onClick={() => setClubModal(true)}
            >
              등록
            </Button>
            <Typography
              sx={{
                fontFamily: "Jeju Myeongjo",
                fontWeight: "bold",
                margin: "1vh 0 0 1.5vh",
              }}
            >
              클럽(동아리)
            </Typography>
            <Typography sx={{ fontFamily: "Jeju Myeongjo", margin: "1vh 0 0 1.5vh" }}>
              {profile.club1 ? `CLUB[1]: ${profile.club1}  ` : "등록된 클럽이 없습니다."}
            </Typography>
            <Typography sx={{ fontFamily: "Jeju Myeongjo", margin: "1vh 0 0 1.5vh" }}>
              {profile.club2 ? `CLUB[2]: ${profile.club2}  ` : ""}
            </Typography>
            <Typography sx={{ fontFamily: "Jeju Myeongjo", margin: "1vh 0 0 1.5vh" }}>
              {profile.club3 ? `CLUB[3]: ${profile.club3}  ` : ""}
            </Typography>
            <Typography sx={{ fontFamily: "Jeju Myeongjo", margin: "1vh 0 0 1.5vh" }}>
              {profile.club4 ? `CLUB[4]: ${profile.club4}  ` : ""}
            </Typography>
            <Typography sx={{ fontFamily: "Jeju Myeongjo", margin: "1vh 0 0 1.5vh" }}>
              {profile.club5 ? `CLUB[5]: ${profile.club5}  ` : ""}
            </Typography>
            {clubModal && (
              <ClubModal setClubModal={setClubModal} profile={profile} setProfile={setProfile} />
            )}
          </Grid>
          {/* 대회 그리드------------------------------------------------ */}
          <Grid
            item
            xs={12}
            md={5.85}
            sx={{
              border: "1px solid #18264f",
              borderRadius: 5,
              boxShadow: "7px 5px 15px -12px rgba(0, 0, 0, 0.5)",
              minHeight: "20vh",
              position: "relative",
            }}
          >
            <Button
              variant="contained"
              className={styles.deleteBtn}
              sx={{
                color: "#fff",
                backgroundColor: "#18264f",
                border: "1px solid #383b3d",
                fontFamily: "Jeju Myeongjo",
                position: "absolute",
              }}
              onClick={onDeleteContest}
            >
              삭제
            </Button>
            <Button
              variant="contained"
              className={styles.clubBtn}
              sx={{
                color: "#fff",
                backgroundColor: "#18264f",
                border: "1px solid #383b3d",
                fontFamily: "Jeju Myeongjo",
                position: "absolute",
              }}
              onClick={() => setContestModal(true)}
            >
              등록
            </Button>
            <Typography
              sx={{
                fontFamily: "Jeju Myeongjo",
                fontWeight: "bold",
                margin: "1vh 0 0 1.5vh",
              }}
            >
              (경진)대회
            </Typography>
            <Typography sx={{ fontFamily: "Jeju Myeongjo", margin: "1vh 0 0 1.5vh" }}>
              {profile.contest1
                ? `CONTEST[1]: ${profile.contest1}`
                : "등록된 대회 경력이 없습니다."}
            </Typography>
            <Typography sx={{ fontFamily: "Jeju Myeongjo", margin: "1vh 0 0 1.5vh" }}>
              {profile.contest2 ? `CONTEST[2]: ${profile.contest2}  ` : ""}
            </Typography>
            <Typography sx={{ fontFamily: "Jeju Myeongjo", margin: "1vh 0 0 1.5vh" }}>
              {profile.contest3 ? `CONTEST[3]: ${profile.contest3}  ` : ""}
            </Typography>
            <Typography sx={{ fontFamily: "Jeju Myeongjo", margin: "1vh 0 0 1.5vh" }}>
              {profile.contest4 ? `CONTEST[4]: ${profile.contest4}  ` : ""}
            </Typography>
            <Typography sx={{ fontFamily: "Jeju Myeongjo", margin: "1vh 0 0 1.5vh" }}>
              {profile.contest5 ? `CONTEST[5]: ${profile.contest5}  ` : ""}
            </Typography>

            {contestModal && (
              <ContestModal
                setContestModal={setContestModal}
                profile={profile}
                setProfile={setProfile}
              />
            )}
          </Grid>
          {/* 프로젝트 그리드------------------------------------------------ */}
          <Grid
            item
            xs={12}
            sx={{
              border: "1px solid #18264f",
              borderRadius: 5,
              boxShadow: "7px 5px 15px -12px rgba(0, 0, 0, 0.5)",
              minHeight: "20vh",
              position: "relative",
              marginBottom: 10,
            }}
          >
            <Button
              variant="contained"
              className={styles.deleteBtn}
              sx={{
                color: "#fff",
                backgroundColor: "#18264f",
                border: "1px solid #383b3d",
                fontFamily: "Jeju Myeongjo",
                position: "absolute",
              }}
              onClick={onDeleteProject}
            >
              삭제
            </Button>
            <Button
              variant="contained"
              className={styles.clubBtn}
              sx={{
                color: "#fff",
                backgroundColor: "#18264f",
                border: "1px solid #383b3d",
                fontFamily: "Jeju Myeongjo",
                position: "absolute",
              }}
              onClick={() => setProjectModal(true)}
            >
              등록
            </Button>
            <Typography
              sx={{
                fontFamily: "Jeju Myeongjo",
                fontWeight: "bold",
                margin: "1vh 0 0 1.5vh",
              }}
            >
              프로젝트
            </Typography>
            <Typography sx={{ fontFamily: "Jeju Myeongjo", margin: "1vh 0 0 1.5vh" }}>
              {profile.project1
                ? `PROJECT[1]: ${profile.project1}  `
                : "등록된 프로젝트가 없습니다."}
            </Typography>
            <Typography sx={{ fontFamily: "Jeju Myeongjo", margin: "1vh 0 0 1.5vh" }}>
              {profile.project2 ? `PROJECT[2]: ${profile.project2}  ` : ""}
            </Typography>
            <Typography sx={{ fontFamily: "Jeju Myeongjo", margin: "1vh 0 0 1.5vh" }}>
              {profile.project3 ? `PROJECT[3]: ${profile.project3}  ` : ""}
            </Typography>
            <Typography sx={{ fontFamily: "Jeju Myeongjo", margin: "1vh 0 0 1.5vh" }}>
              {profile.project4 ? `PROJECT[4]: ${profile.project4}  ` : ""}
            </Typography>
            <Typography sx={{ fontFamily: "Jeju Myeongjo", margin: "1vh 0 0 1.5vh" }}>
              {profile.project5 ? `PROJECT[5]: ${profile.project5}  ` : ""}
            </Typography>
            {projectModal && (
              <ProjectModal
                setProjectModal={setProjectModal}
                profile={profile}
                setProfile={setProfile}
              />
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Mypage;
