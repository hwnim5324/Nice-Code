import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const TextEditor = dynamic(()=> import("../../components/textEditor"), {ssr: false});


const NewPost: NextPage = () => {

    return (
        <div>
            <h1>새 포스트 작성</h1>
            <TextEditor />
        </div>
    )
}

export default NewPost;
