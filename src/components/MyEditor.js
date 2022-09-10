import React, { useEffect, useState } from "react";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


import { convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToMarkdown from 'draftjs-to-markdown';
export const MyEditor = () => {
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );
    const [textAreaContent, setTextAreaContent] = useState(null);
    useEffect(() => {
        setTextAreaContent(draftToMarkdown(convertToRaw(editorState.getCurrentContent())))
        console.log(textAreaContent)
    }, [editorState]);
    return (
        <div>
            <div style={{ border: "1px solid black", padding: '2px', minHeight: '15rem', width: '50%' }}>
                <Editor
                    editorState={editorState}
                    onEditorStateChange={setEditorState}
                />
            </div>
        </div>
    );
}