import React, {useEffect, useState} from "react";
import {EditorState} from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {convertToRaw} from 'draft-js';
import {Editor} from 'react-draft-wysiwyg';
import draftToMarkdown from 'draftjs-to-markdown';
import {BsFillTrashFill} from "react-icons/bs";
import ContentState from "draft-js/lib/ContentState";

export const MyEditor = ({parentCallBack, editingValue}) => {
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );

    const [text, setText] = useState(null);
    useEffect(() => {
        setText(draftToMarkdown(convertToRaw(editorState.getCurrentContent())));

        parentCallBack(text);

    }, [editorState]);


    const [contentState, setContentState] = useState(null) // ContentState JSON
    useEffect(() => {
        if (editingValue !== undefined && editingValue !== null) {
            let _contentState = ContentState.createFromText(editingValue);
            console.log(_contentState)
            console.log(editingValue)
            const raw = convertToRaw(_contentState)
            setContentState(raw)
        }
    }, [editingValue])

    return (
        <div>
            <div style={{border: "1px solid black", padding: '2px', height: 'auto', width: '60%'}}>
                {editingValue !== undefined && editingValue !== null ?
                    <Editor
                        defaultContentState={contentState}
                        onEditorStateChange={setEditorState}
                    />
                    : <Editor
                        editorState={editorState}
                        onEditorStateChange={setEditorState}
                    />}

                <BsFillTrashFill className="delete"
                                 style={{color: 'red', marginLeft: '95%', fontSize: '20', alignSelf: 'end'}}
                                 onClick={() => setEditorState(EditorState.createEmpty())}/>

            </div>
        </div>
    );
}