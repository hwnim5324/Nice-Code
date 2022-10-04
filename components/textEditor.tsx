import { useRef } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

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
            <button onClick={savePost}>저장</button>
        </>
    );
}

export default TextEditor;