import * as Styled from "./styled";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
//import { Link } from "react-scroll";

interface HeaderProps {
    titleColor?: string;
    textColor?: string;
}

const Header: React.FC<HeaderProps> = ({ textColor, titleColor }) => {
    const navigate = useNavigate();
    const [scroll, setScroll] = useState(false);

    const updateScroll = () => {
        setScroll(window.scrollY > 100);
    };  //window.scrollY === window.pageYOffset 둘은 같고, 0일때 스크롤 맨 위 초기값,
        //window.scrollY || document.documentElement.scrollTop 는 브라우저별 호환성때문에 둘중 하나만 참이어도 참이게끔 사용 (크로스브라우징)

    useEffect(() => {
        window.addEventListener("scroll", updateScroll);
        return () => {
            window.removeEventListener("scroll", updateScroll);
        };
        }, []);

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth",
        });
    };

    return(
          <Styled.Wrapper $scroll={scroll}>
          {/* 스크롤이 100px 초과일때 true, 100 이하면 false */}
            <Styled.Menu>
                <Styled.Img src={"assets/v.png"} alt="logo" onClick={()=>{navigate("/");}}/>
                    <Styled.Title $scroll={scroll} titleColor={titleColor}
                        onClick={scrollToTop}>Begin</Styled.Title>
                    <Styled.WrapperMenu>

                    <Styled.Text $scroll={scroll} textColor={textColor}>News</Styled.Text>

                    <Styled.Text $scroll={scroll} textColor={textColor}
                        onClick={() => {navigate("/board");}}>Board
                    </Styled.Text>

                    <Styled.Text $scroll={scroll} textColor={textColor}>Highlight</Styled.Text>

                    <Styled.Text $scroll={scroll} textColor={textColor}>Contact</Styled.Text>

                    <Styled.Text $scroll={scroll} textColor={textColor}
                        onClick={() => {navigate("/login");}}>LogIn
                    </Styled.Text>

                    <Styled.Text $scroll={scroll} textColor={textColor}
                        onClick={()=> {navigate("/signUp");}}>SignUp
                    </Styled.Text>

                </Styled.WrapperMenu>
            </Styled.Menu>
          </Styled.Wrapper>
  );
}
export default Header;