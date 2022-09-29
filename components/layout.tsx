import Footer from "./footer";
import NavBar from "./navBar";
import styled from "@emotion/styled";

interface props {
    children: React.ReactNode
};

const StyledMain = styled.main`
    width: 65%;
    margin: auto;
`;

const Layout = ( {children}: props  ): JSX.Element =>{
    return (
        <>
            <NavBar />
            <StyledMain>{children}</StyledMain>
            <Footer />
        </>
    );
}

export default Layout;