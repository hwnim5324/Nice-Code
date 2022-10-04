import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useRef } from 'react';

const TextEditor = dynamic(()=> import("../../components/textEditor"), {ssr: false});


const NewPost: NextPage = () => {

    return (
        <div>
            <TextEditor />
        </div>
    )
}

export default NewPost;
