import { useRef } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

import { SaveButton } from '../styles/boards.styles';

const Title = () => {
    return (
        <>
            <input type='text' placeholder='제목을 입력해주세요.' />
        </>
    );
}

const Category = () => {
    return (
        <>
            <h2>카테고리를 설정해주세요.</h2>
            <ul>
                <li><input type='radio' name='category' id='a'/><label for='a'>코드리뷰</label></li>
                <li><input type='radio' name='category' id='b'/><label for='b'>질문</label></li>
                <li><input type='radio' name='category' id='c'/><label for='c'>정보 게시판</label></li>
                <li><input type='radio' name='category' id='d'/><label for='d'>자유 게시판</label></li>
            </ul>
        </>
    );
}

const Tag = () => {
    return (
        <>
            <h2>태그를 설정해주세요.</h2>
            <select>
                <option value=''></option>
            </select>
        </>
    );
}

const TextEditor = () => {
    const editorRef = useRef();

    function savePost(){
        const editorIns = editorRef.current?.getInstance(); 
        const contentHtml = editorIns.getHTML(); 
        console.log(contentHtml);
    }
    
    return (
        <>
            <h1>새 포스트 작성</h1>
            <Title />
            <Category />
            <Tag />
            <Editor
                    placeholder="내용을 입력해주세요."
                    previewStyle="vertical"
                    height="700px"
                    initialEditType="wysiwyg"
                    useCommandShortcut={false}
                    language="ko-KR"
                    initialValue=""
                    ref={editorRef}
            ></Editor>
            <div>
                <SaveButton >저장하기</SaveButton>
                <SaveButton onClick={savePost}>게시하기</SaveButton>
            </div>
        </>
    );
}

export default TextEditor;