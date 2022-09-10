import React, { useEffect, useState } from "react";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToMarkdown from 'draftjs-to-markdown';

export const MyEditor = ({parentCallBack}) => {
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );

    const [text, setText] = useState(null);
    useEffect(() => {
        setText(draftToMarkdown(convertToRaw(editorState.getCurrentContent())));

        parentCallBack(text);

    }, [editorState]);
    return (
        <div>
            <div style={{ border: "1px solid black", padding: '2px', height: 'auto', width: '60%'}}>
                <Editor
                    editorState={editorState}
                    onEditorStateChange={setEditorState}
                />
            </div>
        </div>
    );
}