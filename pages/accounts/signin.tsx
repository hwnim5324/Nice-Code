import type { NextPage } from 'next';
import styled from '@emotion/styled';
import Link from 'next/link';
import { useState } from 'react';

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
    font-family: 'Noto Sans Kr';
    font-size: 16px;

    width: 400px;
    height: 52px;

    border: 0;
    border-bottom: 1px solid #ebebeb;

    margin: 0 0 30px 0;
    padding: 0 0 0 14px;
`;

const StyledButton = styled.button`
    font-family: 'Noto Sans Kr';
    font-size: 16px;

    width: 400px;
    height: 52px;

    margin: 30px 0 0 0;
    border: 0;

    &:enabled{
        background-color: #333;
        &:hover{
            background-color: #ebebeb;
        }
    }
    &:disabled{
        background-color: #ebebeb;
    }
`;

const StyledUl = styled.ul`
    width: 400px;
    display: block;
    float: left;
    font-size: 14px;

    padding: 0 0 0 0;
    margin : 15px 0 0 0;

    li{
        float: left;
        list-style: none;

        a{
            text-decoration: none;
            color: black;
        }

        &:first-child::after{
            content: '|';
            margin: 0 0 0 10px;
        }

        &:nth-child(2){
            margin: 0 0 0 10px; 
        }

        &:last-child{
            float: right;
        }
    }
`

const SignIn: NextPage = () => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    function submitSignin(id: string, pw: string){
        // do axios
    }

    return (
        <StyledOutterDiv>
            <StyledInnerDiv>
                <StyledInput type='text' placeholder='아이디' onChange={(e)=>setId(e.target.value)}/>
                <StyledInput type='password' placeholder='비밀번호' onChange={(e)=>setPw(e.target.value)}/>
                <StyledButton disabled={id!==''&&pw!==''?false:true} onClick={()=>{submitSignin(id,pw);}}>로그인</StyledButton>
                <StyledUl>
                    <li><Link href='/accounts/findId'><a>아이디 찾기</a></Link></li>
                    <li><Link href='/accounts/findPw'><a>비밀번호 찾기</a></Link></li>
                    <li><Link href='/accounts/signup'><a>회원가입</a></Link></li>
                </StyledUl>
            </StyledInnerDiv>
        </StyledOutterDiv>
    )
}

export default SignIn;
