import styled from "styled-components";

interface WrapperProps {
$scroll: boolean;
textColor?: string;
titleColor?: string;
}

export const Img = styled.img`
    cursor: pointer;
    margin-right: 15px;
    height: 40px;
    width: 40px;
    margin-left: 5vw;
`

export const Wrapper = styled.div<WrapperProps>`  // TypeScript에서 props 사용시 타입지정 해줘야함.
  /* 레이아웃 */
  display: flex; //가로방향 정렬
  position: fixed;
  top: 0;
  align-items: center; // 수직(위아래)정렬에서 가운데 정렬, 반대로 justify-content: center; 는 수평정렬
  height: 80px;
  width: 100%;
  @media screen and (max-width: 767px) {
    width: 500px;
  }
  z-index: 3;

  /* 색상 */
  background: ${props => props.$scroll ? "white" : "transparent"};
  box-shadow: ${props => props.$scroll ? "0 0 10px 0" : "0"};
  
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

export const Title = styled.div<WrapperProps>`
  cursor: pointer;
  color: ${(props) => props.titleColor ? props.titleColor : props.$scroll ? "black" : "white"};
  text-decoration: underline;
  font-size: 30px;
  font-weight: bold;
  margin-left: 5vw;
  margin-right: 20vw;
  @media screen and (max-width: 767px) {
    font-size: 24px;
    margin-right: 8vw;
  }
  @media screen and (max-width: 500px) {
    font-size: 12px;
    margin-right: 4vw;
  }
`;

export const Text = styled.div<WrapperProps>`
  cursor: pointer;
  color: ${(props) => props.textColor ? props.textColor : props.$scroll ? "black" : "white"};
  font-size: 20px;
  margin-left: 3vw;
  @media screen and (max-width: 767px) {
    font-size: 15px;
  }
  @media screen and (max-width: 500px) {
    font-size: 10x;
  }
`;

