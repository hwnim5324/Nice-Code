import type { NextPage } from 'next';
import styled from '@emotion/styled';

const StyledOutterDiv = styled.div`
    display: flex;
    justify-content: center;

    padding: 80px 0 80px 0;
`;

const StyledInnerDiv = styled.div`
    width: 80%;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledInput = styled.input`
    width: 360px;
    height: 52px;

    border: 0;
    border-bottom: 1px solid #ebebeb;

    margin: 0 0 30px 0;
`;

const StyledButton = styled.button`
    width: 360px;
    height: 52px;

    margin: 30px 0 0 0;
    background-color: #ebebeb;
    border: 0;
`;

const SignIn: NextPage = () => {
    return (
        <StyledOutterDiv>
            <StyledInnerDiv>
                <StyledInput type='text' placeholder='아이디'/>
                <StyledInput type='password' placeholder='비밀번호'/>
                <StyledButton>로그인</StyledButton>
                <div>
                    <ul>
                        <li>아이디 찾기</li>
                        <li>비밀번호 찾기</li>
                        <li>회원가입</li>
                    </ul>
                </div>
            </StyledInnerDiv>
        </StyledOutterDiv>
    )
}

export default SignIn;
