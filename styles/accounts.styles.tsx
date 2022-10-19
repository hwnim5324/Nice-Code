import styled from '@emotion/styled';

const OutterDiv = styled.div`
    display: flex;
    justify-content: center;

    padding: 80px 0 80px 0;
`;

const InnerDiv = styled.div`
    width: 80%;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Input = styled.input`
    font-family: 'Noto Sans Kr';
    font-size: 16px;

    width: 400px;
    height: 52px;

    border: 0;
    border-bottom: 1px solid #ebebeb;

    margin: 0 0 30px 0;
    padding: 0 0 0 14px;
`;

const Button = styled.button`
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

const MultipleChildUl = styled.ul`
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

const SingleChildUl = styled.ul`
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

const RadioOutter = styled.div`
    width: 400px;
    display: flex;
    justify-content: space-around;
    margin-bottom: 30px;

    div{
        display: inline-flex;
        align-items: center;

        width: 140px;
        height: 48px;

        border: 1px solid #ebebeb;
        background-color: #ebebeb;
    }
`;

const Radio = styled.input`
    margin-left: 1.5rem;
`

const Label = styled.label`
    font-size: 16px;
    margin-left: 1rem;
`

export { OutterDiv, InnerDiv, Input, Button, MultipleChildUl, SingleChildUl, RadioOutter, Radio, Label };