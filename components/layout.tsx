import Footer from "./footer";
import NavBar from "./navBar";

import { Main } from '../styles/components.layout.styles';

interface props {
    children: React.ReactNode
};



const Layout = ( {children}: props  ): JSX.Element =>{
    return (
        <>
            <NavBar />
            <Main>{children}</Main>
            <Footer />
        </>
    );
}

export default Layout;