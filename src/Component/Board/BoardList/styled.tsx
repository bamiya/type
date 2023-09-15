import styled from "styled-components";

export const TopPaper = styled.div`
height: 200px;
background-color: rgb(94 83 83);
`;

export const ListWrapper = styled.div`
width: 100%;
hieght: 100%;
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
background-color: rgb(204 204 255);
`;

export const ListItem = styled.div`
  /* 각 목록 항목에 대한 스타일을 작성하세요. */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }
`;

export const ListText = styled.div`
  /* 각 목록 항목 내 텍스트에 대한 스타일을 작성하세요. */
  font-size: 16px;
  color: #333;
`;

export const LoadingMessage = styled.div`
  /* 로딩 메시지에 대한 스타일을 작성하세요. */
  font-size: 16px;
  color: #555;
`;