// import React, { useEffect, useState } from "react";
// import { EditorState } from "draft-js";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
//
//
// import { convertToRaw } from 'draft-js';
// import { Editor } from 'react-draft-wysiwyg';
// import draftToMarkdown from 'draftjs-to-markdown';
//
// export const MyEditor = () => {
//     const [editorState, setEditorState] = useState(() =>
//         EditorState.createEmpty()
//     );
//
//     const [textAreaContent, setTextAreaContent] = useState(null);
//     const [textAreaContent2, setTextAreaContent2] = useState(null);
//     const [textAreaContent3, setTextAreaContent3] = useState(null);
//     useEffect(() => {
//         if (textAreaContent === null) {
//             setTextAreaContent(draftToMarkdown(convertToRaw(editorState.getCurrentContent())))
//         }else if(textAreaContent2 === null) {
//
//             setTextAreaContent2(draftToMarkdown(convertToRaw(editorState.getCurrentContent())))
//         }
//         else if(textAreaContent3 !== null) {
//
//             setTextAreaContent3(draftToMarkdown(convertToRaw(editorState.getCurrentContent())))
//         }
//     }, [editorState, textAreaContent]);
//     return (
//         <div>
//             <div style={{ border: "1px solid black", padding: '2px', minHeight: '15rem', width: '50%' }}>
//                 <Editor
//                     editorState={editorState}
//                     onEditorStateChange={setEditorState}
//                 />
//             </div>
//         </div>
//     );
// }