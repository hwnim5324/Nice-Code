import styled from "@emotion/styled";

const StyledFooter = styled.footer`
    background-color: #f2f2f2;
`;

const StyledDiv = styled.div`
    width: 65%;
    margin: auto;
    margin-top: 100px;
`;

const Footer = (): JSX.Element => {
    return (
        <StyledFooter>
            <StyledDiv>
                footer
            </StyledDiv>
        </StyledFooter>
    );
}

export default Footer;