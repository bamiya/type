import styled from "styled-components";


export const Wrapper = styled.div<{ scroll : boolean }>`  // TypeScript에서 props 사용시 타입지정 해줘야함.
  /* 레이아웃 */
  display: flex; //가로방향 정렬
  position: fixed;
  align-items: center; // 수직(위아래)정렬에서 가운데 정렬, 반대로 justify-content: center; 는 수평정렬
  height: 80px;
  width: 100%;
  @media screen and (max-width: 767px) {
    width: 500px;
  }
  z-index: 3;

  /* 색상 */
  background: ${(props) => props.scroll ? "white" : "transparent"};
  box-shadow: ${(props) => {
    let shadow;
    if (props.scroll) {
      shadow = "0 0 10px 0";
    } else {
      shadow = "0";
    }
    return shadow;
  }};
  color: black;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const WrapperMenu = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.div<{ scroll: boolean }>`
  cursor: pointer;
  color: ${(props) => (props.scroll ? "black" : "white")};
  text-decoration: underline;
  font-size: 30px;
  font-weight: bold;
  margin-left: 10vw;
  margin-right: 40vw;
  @media screen and (max-width: 767px) {
    font-size: 24px;
    margin-right: 8vw;
  }
  @media screen and (max-width: 500px) {
    font-size: 12px;
    margin-right: 4vw;
  }
`;

export const Text = styled.div<{ scroll: boolean }>`
  cursor: pointer;
  color: ${(props) => (props.scroll ? "black" : "white")};
  font-size: 20px;
  margin-left: 3vw;
  @media screen and (max-width: 767px) {
    font-size: 15px;
  }
  @media screen and (max-width: 500px) {
    font-size: 10x;
  }
`;

