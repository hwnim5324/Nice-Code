import Footer from "./footer";
import NavBar from "./navBar";

interface props {
    children: React.ReactNode
};

const Layout = ( {children}: props  ): JSX.Element =>{
    return (
        <>
            <NavBar />
            <main>{children}</main>
            <Footer />
        </>
    );
}

export default Layout;