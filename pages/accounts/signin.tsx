import type { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';

import { OutterDiv, InnerDiv, Input, Button, MultipleChildUl } from '../../styles/accounts.styles';

const SignIn: NextPage = () => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    function submitSignin(id: string, pw: string){
        // do axios
    }

    return (
        <OutterDiv>
            <InnerDiv>
                <Input type='text' placeholder='아이디' onChange={(e)=>setId(e.target.value)}/>
                <Input type='password' placeholder='비밀번호' onChange={(e)=>setPw(e.target.value)}/>
                <Button disabled={id!==''&&pw!==''?false:true} onClick={()=>{submitSignin(id,pw);}}>로그인</Button>
                <MultipleChildUl>
                    <li><Link href='/accounts/findId'><a>아이디 찾기</a></Link></li>
                    <li><Link href='/accounts/findPw'><a>비밀번호 찾기</a></Link></li>
                    <li><Link href='/accounts/signup'><a>회원가입</a></Link></li>
                </MultipleChildUl>
            </InnerDiv>
        </OutterDiv>
    )
}

export default SignIn;
