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
`;

export const BoardTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: white;
`;

export const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  margin-bottom: 10px;
`;

export const Button = styled.button`
  margin-bottom: 10px;
`;

export const List = styled.ul`
  margin-top: 20px;
  list-style: none;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  color: white;
`;

export const ListText = styled.span`
  margin-right: 10px;
`;

export const LoadingMessage = styled.li`
  margin-bottom: 10px;
  color: gray;
`;
