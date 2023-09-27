import styled from "styled-components";

export const Wrapper = styled.div`
width: 80%;
margin: 100px auto 0;
padding-top: 150px;
display: flex; /* 수직 중앙 정렬을 위해 flex 사용 */
flex-direction: column; /* 수직으로 쌓이도록 설정 */
margin: 0 auto; /* 가운데 정렬을 위해 margin을 추가합니다. */
`;

export const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  /* 구분선 스타일 */
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 4px;
`;

export const Input = styled.input`
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

/* 헤더 스타일 */
export const Header = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const HeaderItem = styled.div`
font-weight: bold;
font-size: 18px;
margin: 10px 0;
`