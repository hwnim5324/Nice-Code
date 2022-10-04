import styled from "@emotion/styled";

const Header = styled.header`
    border-bottom: 1px solid #f2f2f2;
    margin: 10px 0 50px 0;
`;

const Div = styled.div`
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

const LeftUl = styled.ul`
    display: flex;
    align-items: center;

    width: 50%;

    li{
        list-style: none;
        white-space: nowrap;
        font-size: 20px;
        margin-right: 30px;
    }
    
`;

const RightUl = styled.ul`
    display: flex;
    align-items: center;

    li{
        list-style: none;
        white-space: nowrap;
        font-size: 20px;
        margin-left: 30px;
    }
`;

const Logo = styled.img`
    height: 46px;
    margin: 1.1em 0 1.1em 0;
`

const Main = styled.main`
    width: 65%;
    margin: auto;
`;

const FooterOutter = styled.footer`
    background-color: #f2f2f2;
`;

const FooterDiv = styled.div`
    width: 65%;
    margin: auto;
    margin-top: 100px;
`;

export { Header, Div, LeftUl, RightUl, Logo, Main, FooterOutter, FooterDiv };