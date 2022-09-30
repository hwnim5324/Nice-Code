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
    }
`

const FindId: NextPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    function submitFindId(id: string, pw: string){
        // do axios
    }

    return (
        <StyledOutterDiv>
            <StyledInnerDiv>
                <StyledInput type='text' placeholder='이름' onChange={(e)=>setName(e.target.value)}/>
                <StyledInput type='email' placeholder='이메일' onChange={(e)=>setEmail(e.target.value)}/>
                <StyledButton disabled={name!==''&&email!==''?false:true} onClick={()=>{submitFindId(name,email);}}>아이디 찾기</StyledButton>
                <StyledUl>
                    <li><Link href='/accounts/findPw'><a>비밀번호 찾기</a></Link></li>
                </StyledUl>
            </StyledInnerDiv>
        </StyledOutterDiv>
    )
}

export default FindId;