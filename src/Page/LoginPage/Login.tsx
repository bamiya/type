import React, { useEffect, useState } from "react";
import * as Styles from "./styled";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CryptoJS from "crypto-js";
import Header from "../../Component/Header/Header"

interface TokenData {
  access_token: string;
  profileImg: string;
  refresh_token: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const getOauth = async () => {
    const code = new URL(window.location.href).searchParams.get("code");
    const googleAuthEndpointResponse = await axios.get("https://accounts.google.com/.well-known/openid-configuration");
    const googleAuthEndpoint = googleAuthEndpointResponse.data.authorization_endpoint;

    const clientId = "696250759741-uiad6ie9doe9r915ap06jdplir2drosu.apps.googleusercontent.com";
    const redirectUri = "http://localhost:3000/login";
    const scope = "openid email profile";

    const authUrl = `${googleAuthEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code`;

    if (code) {
      try {
        const response = await axios.post<TokenData>("http://localhost:8080/login", { code });
        const data = response.data;
        sessionStorage.setItem("access_token", data.access_token);
        localStorage.setItem("refresh_token", data.refresh_token);
        navigate("/");
      } catch (e) {
        if (axios.isAxiosError(e)) {
          alert(e.response?.data?.msg);
        }
        navigate("/login");
      }
    } else {
      window.location.href = authUrl;
    }
  };

  useEffect(() => {
    // URL에 code가 있는 경우에만 getOauth 호출
    const code = new URL(window.location.href).searchParams.get("code");
    if (code) {
      getOauth();
    }
  }, []);

  const onLogin = async () => {
    const createHashedPassword = CryptoJS.SHA256(pw).toString(CryptoJS.enc.Base64);

    try {
      const response = await axios.post<TokenData>("http://localhost:8080/login", { email, pw: createHashedPassword });
      const data = response.data;
      sessionStorage.setItem("access_token", data.access_token);
      sessionStorage.setItem("profileImg", data.profileImg);
      localStorage.setItem("refresh_token", data.refresh_token);
      navigate("/");
    } catch (e) {
      if (axios.isAxiosError(e)) {
        alert(e.response?.data?.msg); 
      }
      navigate("/login");
    }
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onLogin();
    }
  };

  return (
  <>
  <Header titleColor="black" textColor="black" />
    <Styles.Wrapper>
      <Styles.ContentBox>
        <Styles.LoginText>LOGIN</Styles.LoginText>

        <Styles.LoginText2>
          이메일
          <Styles.Input placeholder="이메일을 입력하세요" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
        </Styles.LoginText2>

        <Styles.LoginText2 htmlFor="pw">
          비밀번호
          <Styles.Input type="password" placeholder="비밀번호를 입력하세요" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPw(e.target.value)} onKeyPress={onKeyPress} />
        </Styles.LoginText2>

        <Styles.UserBlueBtn onClick={onLogin}>로그인</Styles.UserBlueBtn>
        <Styles.GoogleBtn onClick={getOauth}>구글 로그인</Styles.GoogleBtn>

        <div>---- OR ----</div>

        <Styles.FindSignWrap>
          <Styles.FindSignText onClick={() => navigate("/findPass")}>비밀번호 찾기</Styles.FindSignText>
          <div> │ </div>
          <Styles.FindSignText onClick={() => navigate("/sign")}>회원가입</Styles.FindSignText>
        </Styles.FindSignWrap>
      </Styles.ContentBox>
    </Styles.Wrapper>
  </>
  );
};

export default Login;