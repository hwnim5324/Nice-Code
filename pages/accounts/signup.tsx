import type { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';

import { OutterDiv, InnerDiv, Input, Button } from '../../styles/accounts.styles';

const SignUp: NextPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [pwCheck, setPwCheck] = useState('');

    function submitSignup(name: string, email: string, id: string, pw: string, pwCheck: string){
        if(pw!==pwCheck) {
            alert('비밀번호가 서로 다릅니다.\n확인해주세요');
            return ;
        }
        // do axios
    }

    function allFormRight(name: string, email: string, id: string, pw: string, pwCheck: string){
        if((name!=='' && email!=='' && id!=='' && pw!=='' && pwCheck!=='')) return false;
        else return true;
    }

    return (
        <OutterDiv>
            <InnerDiv>
                <Input type='text' placeholder='이름' onChange={(e)=>setName(e.target.value)}/>
                <Input type='email' placeholder='이메일' onChange={(e)=>setEmail(e.target.value)}/>
                <Input type='text' placeholder='아이디' onChange={(e)=>setId(e.target.value)}/>
                <Input type='password' placeholder='비밀번호' onChange={(e)=>setPw(e.target.value)}/>
                <Input type='password' placeholder='비밀번호 확인' onChange={(e)=>setPwCheck(e.target.value)}/>
                <Button disabled={allFormRight(name, email, id, pw, pwCheck)} onClick={()=>{submitSignup(name, email, id, pw, pwCheck);}}>회원가입</Button>
            </InnerDiv>
        </OutterDiv>
    )
}

export default SignUp;
