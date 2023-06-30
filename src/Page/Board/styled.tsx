import styled from "styled-components";


export const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;

`;

export const TitleBox = styled.div`
    width: 100%;
    margin-top: 200px;
`

export const BoardTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: white;
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
  color: white;
`;

export const LoadingMessage = styled.li`
  margin-bottom: 10px;
  color: gray;
`;
