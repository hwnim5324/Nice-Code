import type { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';

import { OutterDiv, InnerDiv, Input, Button, SingleChildUl } from '../../styles/accounts.styles';

const FindId: NextPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    function submitFindId(id: string, pw: string){
        // do axios
    }

    return (
        <OutterDiv>
            <InnerDiv>
                <Input type='text' placeholder='이름' onChange={(e)=>setName(e.target.value)}/>
                <Input type='email' placeholder='이메일' onChange={(e)=>setEmail(e.target.value)}/>
                <Button disabled={name!==''&&email!==''?false:true} onClick={()=>{submitFindId(name,email);}}>아이디 찾기</Button>
                <SingleChildUl>
                    <li><Link href='/accounts/findPw'><a>비밀번호 찾기</a></Link></li>
                </SingleChildUl>
            </InnerDiv>
        </OutterDiv>
    )
}

export default FindId;