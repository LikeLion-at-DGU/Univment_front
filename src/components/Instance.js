import axios from "axios";
import { getCookie, removeCookie, setCookie } from "./cookie";

const ACCESS_TOKEN = getCookie("access-token");
const REFRESH_TOKEN = localStorage.getItem("refresh-token");
export const Instance = axios.create({
  baseURL: "http://54.180.165.166/",
  withCredentials: true,
  headers: {
    Authorization: `Bearer ` + ACCESS_TOKEN,
    "Access-Control-Allow-Origin": "http://54.180.165.166/",
  },
});

Instance.interceptors.request.use(
  (config) => {
    const accessToken = ACCESS_TOKEN;
    if (accessToken) {
      config.headers["Authorization"] = "Bearer " + accessToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

Instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    // response에서 error가 발생했을 경우 catch로 넘어가기 전에 처리
    try {
      const errResponseStatus = error.response?.status;
      const errResponseData = error.response?.data;
      const prevRequest = error.config;

      // 새로고침 ACCESS_TOKEN 재발급--------------------------------------------
      if (errResponseStatus === 403) {
        const refreshToken = REFRESH_TOKEN;
        try {
          const { data } = await axios.post("http://54.180.165.166/auth/token/refresh/", {
            refresh: refreshToken,
          });
          const newAccessToken = data.data.access;
          // const newRefreshToken = data.data.refresh;
          prevRequest.headers = {
            "Content-Type": "application/json",
            Authorization: "Bearer " + newAccessToken,
          };
          setCookie("access-token", newAccessToken);
          // localStorage.setItem("refresh-token", newRefreshToken);
          return await axios(prevRequest);
        } catch (error) {
          new Error(error);
        }
      }

      // access token이 만료되어 발생하는 에러인 경우
      if (errResponseData?.error?.message === "jwt expired" || errResponseStatus === 401) {
        const preRefreshToken = getCookie("refresh-token");
        if (preRefreshToken) {
          // refresh token을 이용하여 access token 재발급
          async function regenerateToken() {
            return await axios
              .post("http://54.180.165.166/auth/token/refresh/", {
                refresh: preRefreshToken,
              })
              .then(async (res) => {
                const { access, refresh } = res.data;
                // 새로 받은 token들 저장
                setCookie("access-token", access, {
                  path: "/" /*httpOnly: true */,
                });
                setCookie("refresh-token", refresh, {
                  path: "/" /*httpOnly: true */,
                });

                // header 새로운 token으로 재설정
                prevRequest.headers.Authorization = `Bearer ${access}`;

                // 실패했던 기존 request 재시도
                return await axios(prevRequest);
              })
              .catch((e) => {
                /*
                  token 재발행 또는 기존 요청 재시도 실패 시
                  기존 token 제거
                 */
                removeCookie("access-token");
                removeCookie("refresh-token");
                window.location.href = "/";

                return new Error(e);
              });
          }
          return await regenerateToken();
        } else {
          throw new Error("There is no refresh token");
        }
      }
    } catch (e) {
      // 오류 내용 출력 후 요청 거절
      return Promise.reject(e);
    }
  }
);
