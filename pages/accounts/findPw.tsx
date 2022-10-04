import type { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';

import { OutterDiv, InnerDiv, Input, Button, SingleChildUl } from '../../styles/accounts.styles';

const FindPw: NextPage = () => {
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');

    function submitFindPw(id: string, pw: string){
        // do axios
    }

    return (
        <OutterDiv>
            <InnerDiv>
                <Input type='text' placeholder='아이디' onChange={(e)=>setId(e.target.value)}/>
                <Input type='email' placeholder='이메일' onChange={(e)=>setEmail(e.target.value)}/>
                <Button disabled={id!==''&&email!==''?false:true} onClick={()=>{submitFindPw(id,email);}}>비밀번호 찾기</Button>
                <SingleChildUl>
                    <li><Link href='/accounts/findId'><a>아이디 찾기</a></Link></li>
                </SingleChildUl>
            </InnerDiv>
        </OutterDiv>
    )
}

export default FindPw;