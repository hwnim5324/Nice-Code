import Link from "next/link";

import { Header, Div, LeftUl, RightUl, Logo } from '../styles/components.layout.styles';

const NavBar = (): JSX.Element =>{
    return (
        <Header>
            <Div>
                <Link href='/'><a><Logo src="/logo2.png" /></a></Link>
                <LeftUl>
                    <Link href='/reviews'><a><li>코드리뷰</li></a></Link>
                    <Link href='/questions'><a><li>질문</li></a></Link>
                    <Link href='/boards/info'><a><li>커뮤니티</li></a></Link>
                </LeftUl>
                <RightUl>
                    <Link href='/boards/newpost'><a><li>글쓰기</li></a></Link>
                    <Link href='/accounts/signin'><a><li>로그인</li></a></Link>
                </RightUl>
            </Div>
        </Header>
    );
}

export default NavBar;