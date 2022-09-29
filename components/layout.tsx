import { ReactNode } from "react";
import Footer from "./footer";
import NavBar from "./navBar";

interface layoutProps{
    children: ReactNode
}

const Layout = ( props: layoutProps ) =>{
    return (
        <>
            <header>
                <NavBar />
            </header>
            <body>
                {props.children}
            </body>
            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default Layout;