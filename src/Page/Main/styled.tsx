import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;              //가로방향 정렬
    flex-direction: column;     //컨테이너 안의 div들을 열(column)로 배치
    align-items: center;        // 수직(위아래)정렬에서 가운데 정렬, 반대로 justify-content: center; 는 수평정렬
    justify-content: center;
    height: 65vh;
    width: 100%;


    @media screen and (max-width: 1023px) {
    width: 100%;
    }

    /* 색상 */
    background-color: rgb(94 83 83);
`;

export const SecondWrapper = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    height: 65vh;
    width: 100%;
    background-color: rgb(153 200 255);
    flex-wrap: wrap;
`;

export const ThirdWrapper = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    height: 65vh;
    width: 100%;
    background-color: rgb(255 238 249);
    flex-wrap: wrap;
`;