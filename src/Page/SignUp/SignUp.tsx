import React, { useEffect, useState } from "react";
import * as Styles from "./styled";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import CryptoJS from "crypto-js";

const SignUp: React.FC = () => {
    const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [birth, setBirth] = useState("");

  // 유효성 검사
  const [isEmail, setIsEmail] = useState(true);
  const [isPassword, setIsPassword] = useState(true);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(true);
  const [isName, setIsName] = useState(true);
  const [isPhone, setIsPhone] = useState(true);
  const [isBirth, setIsBirth] = useState(true);
  // 유효성 메세지
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");
  const [nameMessage, setNameMessage] = useState("");
  const [phoneMessage, setPhoneMessage] = useState("");
  const [birthMessage, setBirthMessage] = useState("");

  const replace = useNavigate();

  useEffect(() => {
    const { state } = location;
    if (state !== null) {
      setEmail(state.email);
    }
  }, [location]);

  const signIn = async () => {
    if (isEmail && isPassword && isPasswordConfirm && isName && isPhone && isBirth) {
      try {
        const createHashedPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Base64);
        const createHashedPasswordConfirm = CryptoJS.SHA256(passwordCheck).toString(CryptoJS.enc.Base64);
        const data = await axios.post("http://localhost:8080/register", {
          email,
          password: createHashedPassword,
          passwordCheck: createHashedPasswordConfirm,
          name,
          tel: phone,
          birth,
          profileImg: "",
        });
        alert(data.data.msg);
        replace("/");
      } catch (error: any) {
        alert(error.response.data.msg);
      }
    } else {
      alert("형식에 맞지 않는 값이 있습니다.");
    }
  };

  const onEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailRegex = /^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/;
    const emailCurrent = e.target.value;
    setEmail(e.target.value);
    if (emailRegex.test(emailCurrent)) {
      setEmailMessage("올바른 이메일 형식입니다.");
      setIsEmail(true);
    } else {
      setEmailMessage("올바른 이메일 형식을 입력해주세요.");
      setIsEmail(false);
    }
  };

  const onPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const passwordCurrent = e.target.value;
    setPassword(e.target.value);
    if (passwordRegex.test(passwordCurrent)) {
      setPasswordMessage("올바른 비밀번호 형식입니다.");
      setIsPassword(true);
    } else {
      setPasswordMessage("비밀번호는 영문자와 숫자를 포함하여 8자 이상이어야 합니다.");
      setIsPassword(false);
    }
  };

  const onPasswordCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordCheck(e.target.value);
    if (password === e.target.value) {
      setPasswordConfirmMessage("비밀번호가 일치합니다.");
      setIsPasswordConfirm(true);
    } else {
      setPasswordConfirmMessage("비밀번호가 일치하지 않습니다.");
      setIsPasswordConfirm(false);
    }
  };

  const onName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (e.target.value !== "") {
      setIsName(true);
    } else {
      setIsName(false);
    }
  };

  const onPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const phoneRegex = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
    const phoneCurrent = e.target.value;
    setPhone(e.target.value);
    if (phoneRegex.test(phoneCurrent)) {
      setPhoneMessage("올바른 전화번호 형식입니다.");
      setIsPhone(true);
    } else {
      setPhoneMessage(' "-" 제외한 형식으로 입력해주세요');
      setIsPhone(false);
    }
  };

  const onBirth = (e: React.ChangeEvent<HTMLInputElement>) => {
    const birthRegex = /^\d{6}$/;
    const birthCurrent = e.target.value;
    setBirth(e.target.value);
    if (birthRegex.test(birthCurrent)) {
      setBirthMessage("올바른 생년월일 형식입니다.");
      setIsBirth(true);
    } else {
      setBirthMessage("생년월일은 6자리 숫자로 입력해주세요.");
      setIsBirth(false);
    }
  };

  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      signIn(); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };

  return (
    <Styles.Wrapper>
      <Styles.ContentBox>
        <Styles.SignText>SIGN UP</Styles.SignText>
        <Styles.SignText2 htmlFor="email">
          이메일
          <Styles.Input placeholder="이메일을 입력해주세요" onChange={(e: React.ChangeEvent<HTMLInputElement>) => onEmail(e)} value={email !== "" ? email : ""} />
          <Styles.WarningMessage check={isEmail}>{emailMessage}</Styles.WarningMessage>
        </Styles.SignText2>

        <Styles.SignText2>
          비밀번호
          <Styles.Input type="password" placeholder="비밀번호를 입력해주세요." onChange={(e: React.ChangeEvent<HTMLInputElement>) => onPassword(e)} value={password || ""} />
          <Styles.WarningMessage check={isPassword}>{passwordMessage}</Styles.WarningMessage>
        </Styles.SignText2>

        <Styles.SignText2>
          비밀번호 확인
          <Styles.Input type="password" placeholder="비밀번호를 다 시 입력해주세요." onChange={(e: React.ChangeEvent<HTMLInputElement>) => onPasswordCheck(e)} value={passwordCheck || ""} />
          <Styles.WarningMessage check={isPasswordConfirm}>{passwordConfirmMessage}</Styles.WarningMessage>
        </Styles.SignText2>

        <Styles.SignText2>
          이름
          <Styles.Input placeholder="이름을 입력해주세요." onChange={(e: React.ChangeEvent<HTMLInputElement>) => onName(e)} value={name || ""} />
          <Styles.WarningMessage check={isName}>{nameMessage}</Styles.WarningMessage>
        </Styles.SignText2>

        <Styles.SignText2>
          연락처
          <Styles.Input placeholder="'-' 제외 휴대폰 번호를 입력해주세요" onChange={(e: React.ChangeEvent<HTMLInputElement>) => onPhone(e)} value={phone || ""} />
          <Styles.WarningMessage check={isPhone}>{phoneMessage}</Styles.WarningMessage>
        </Styles.SignText2>

        <Styles.SignText2>
          생년월일
          <Styles.Input placeholder="ex)1999-09-09" onKeyDown={handleOnKeyPress} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onBirth(e)} value={birth || ""} />
          <Styles.WarningMessage check={isBirth}>{birthMessage}</Styles.WarningMessage>
        </Styles.SignText2>

        <Styles.UserGreenBtn onClick={() => signIn()}>가입하기</Styles.UserGreenBtn>
      </Styles.ContentBox>
    </Styles.Wrapper>
  );
};
export default SignUp;