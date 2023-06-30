import styled from "styled-components";

export const MarginTopWrapper = styled.div<{margin : boolean}>`
    width: 1200px;
    margin: ${props => {
        return props.margin ? "80px auto 0 auto" : "0 auto"
    }};
`