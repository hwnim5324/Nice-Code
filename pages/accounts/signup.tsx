import type { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';

import { OutterDiv, InnerDiv, Input, Button, RadioOutter, Radio, Label } from '../../styles/accounts.styles';

const SignUp: NextPage = () => {
    const [name, setName] = useState('');
    const [birth, setBirth] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [pwCheck, setPwCheck] = useState('');

    const InputRadio = () => {
        return(
            <RadioOutter>
                <div>
                    <Radio type='radio' name='gender' id='male' value='male' onChange={(e)=>setGender(e.target.value)}/>
                    <Label for='male'>남 성</Label>
                </div>
                <div>
                    <Radio type='radio' name='gender' id='female' value='female' onChange={(e)=>setGender(e.target.value)}/>
                    <Label for='female'>여 성</Label>
                </div>
            </RadioOutter>
        );
    }

    function submitSignup(name: string, birth:string, gender:string, email: string, id: string, pw: string, pwCheck: string){
        if(pw!==pwCheck) {
            alert('비밀번호가 서로 다릅니다.\n확인해주세요');
            return ;
        }else{
            return ;
        }
        // do axios
    }

    function allFormInserted(name: string, birth:string, gender:string, email: string, id: string, pw: string, pwCheck: string){
        if((name!=='' && birth.length===6 && gender!=='' && email!=='' && id!=='' && pw!=='' && pwCheck!=='')) return false;
        else return true;
    }

    return (
        <OutterDiv>
            <InnerDiv>
                <Input type='text' placeholder='이름' onChange={(e)=>setName(e.target.value)}/>
                <Input type='number' placeholder='생년월일 6자리 ex)220101' onChange={(e)=>setBirth(e.target.value)}/>
                <InputRadio />
                <Input type='email' placeholder='이메일' onChange={(e)=>setEmail(e.target.value)}/>
                <Input type='text' placeholder='아이디' onChange={(e)=>setId(e.target.value)}/>
                <Input type='password' placeholder='비밀번호' onChange={(e)=>setPw(e.target.value)}/>
                <Input type='password' placeholder='비밀번호 확인' onChange={(e)=>setPwCheck(e.target.value)}/>
                <Button disabled={allFormInserted(name, birth, gender, email, id, pw, pwCheck)} onClick={()=>{submitSignup(name, birth, gender, email, id, pw, pwCheck);}}>회원가입</Button>
            </InnerDiv>
        </OutterDiv>
    )
}

export default SignUp;
