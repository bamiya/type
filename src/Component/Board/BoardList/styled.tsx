import styled from "styled-components";
import {Link} from "react-router-dom";

export const BoardListContainer = styled.div`
width: 80%;
margin: 100px auto 0;
padding-top: 150px;
display: flex; /* 수직 중앙 정렬을 위해 flex 사용 */
flex-direction: column; /* 수직으로 쌓이도록 설정 */
margin: 0 auto; /* 가운데 정렬을 위해 margin을 추가합니다. */
`;

export const TopPaper = styled.div`
width: calc(100% + 40px); /* padding 크기만큼 가로 길이를 조정합니다. */
background-color: rgb(230 240 255);
border-radius: 10px;
display: flex;              //가로방향 정렬
align-items: center;        // 수직(위아래)정렬에서 가운데 정렬, 반대로 justify-content: center; 는 수평정렬
box-sizing: border-box;
margin-top: 70px;
`;

export const WrapperMenu = styled.div`
display: flex;              //가로방향 정렬
align-items: center;        // 수직(위아래)정렬에서 가운데 정렬, 반대로 justify-content: center; 는 수평정렬
justify-content: center;
margin: 0 auto; /* 가운데 정렬을 위해 margin을 추가합니다. */
`;

export const CreateButton = styled.div`
margin-left: auto;  //부모 div flex일 경우 오른쪽 정렬
padding: 10px;
cursor: pointer;
`;

export const Menu = styled.div`
display: flex;
align-items: center;
gap: 5px;
`;

export const MenuText = styled.div`
font-size: 16px;
color: #333;
margin: 0px 15px; /* 위아래 10px, 좌우 20px의 간격을 줍니다. */
padding: 5px;
cursor: pointer;
`;

export const ListWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: rgb(255 239 239);
border-radius: 15px;
padding: 20px;
`;

export const List = styled.div`
display: flex;              //가로방향 정렬
flex-direction: column;     //컨테이너 안의 div들을 열(column)로 배치
align-items: center;        // 수직(위아래)정렬에서 가운데 정렬, 반대로 justify-content: center; 는 수평정렬
justify-content: center;
height: 100%;
width: 100%;

@media screen and (max-width: 1023px) {
width: 100%;
}

/* 색상 */
/*background-color: rgb(204 204 255);*/
`;

export const ListItem = styled.div`
  /* 각 목록 항목에 대한 스타일을 작성하세요. */
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
  gap: 200px;

  &:last-child {
    border-bottom: none;
  }
`;

export const BoardLink = styled(Link)`
font-size: 16px;
text-decoration: none;
color: #333;
&:visited {
  color: purple; /* 방문한 링크의 텍스트 색상을 보라색으로 변경합니다. */
}
flex: 1; /* 각 링크가 동일한 너비를 가지도록 설정 */
min-width: 200px; /* 최소 너비를 설정하여 글자 길이에 상관없이 고정 너비를 가지게 합니다. */
`;

export const ListText = styled.div`
  /* 각 목록 항목 내 텍스트에 대한 스타일을 작성하세요. */
  font-size: 16px; 
`;

export const LoadingMessage = styled.div`
  /* 로딩 메시지에 대한 스타일을 작성하세요. */
  font-size: 16px;
  color: #555;
`;

/* 헤더 스타일 */
export const Header = styled.div`
width: 100%;
padding: 20px;
font-size: 24px;
font-weight: bold;
display: flex;
justify-content: space-between; /* 수평으로 정렬하고 각 항목을 여백으로 분리합니다. */
align-items: center; /* 세로 정렬 중 가운데 정렬합니다. */
`;


export const HeaderItem = styled.div`
font-weight: bold;
font-size: 17px;

&:first-child {
  margin-right: 240px; /* 첫 번째 아이템의 우측 여백을 설정합니다. */
}
`;