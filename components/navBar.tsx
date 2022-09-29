import styled from "@emotion/styled";
import Link from "next/link";

const StyledHeader = styled.header`
    border-bottom: 1px solid #f2f2f2;
    margin: 10px 0 50px 0;
`;

const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;

    width: 65%;
    margin: auto;

    ul{
        padding: 0 0 0 0;
        margin: 0 0 0 0;
    }

    a{
        text-decoration: none;
        color: black;
    }
`

const StyledUl = styled.ul`
    display: flex;
    align-items: center;

    width: 50%;

    li{
        list-style: none;
        font-size: 20px;
        margin-right: 30px;
    }
    
`;

const StyledUlR = styled.ul`
    display: flex;
    align-items: center;

    li{
        list-style: none;
        font-size: 20px;
        margin-left: 30px;
    }
`;

const NavBar = (): JSX.Element =>{
    return (
        <StyledHeader>
            <StyledDiv>
                <Link href='/'><a><h1>logo</h1></a></Link>
                <StyledUl>
                    <Link href='/reviews'><a><li>코드리뷰</li></a></Link>
                    <Link href='/questions'><a><li>질문</li></a></Link>
                    <Link href='/boards/info'><a><li>커뮤니티</li></a></Link>
                </StyledUl>
                <StyledUlR>
                    <Link href='/boards/newpost'><a><li>글쓰기</li></a></Link>
                    <Link href='/accounts/signin'><a><li>로그인</li></a></Link>
                </StyledUlR>
            </StyledDiv>
        </StyledHeader>
    );
}

export default NavBar;