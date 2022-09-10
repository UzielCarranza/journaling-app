import React, {useRef} from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export const Home = () => {
    const textAreaContent = useRef(null);
    const textAreaContent2 = useRef(null);
    const textAreaContent3 = useRef(null);

    const handleClick = event => {
        // 👇️ access textarea value
        console.log(textAreaContent.current.value);
        console.log(textAreaContent2.current.value);
        console.log(textAreaContent3.current.value);

    };

    return (
        <div style={{display: 'flex', flexDirection: 'column', width: '40%', justifyContent: 'space-between'}}>
            <label htmlFor="message">What does your normal day looks like</label>
            <textarea ref={textAreaContent} id="message" name="message"/>
            <br/>
            <label htmlFor="message2">What are your biggest goals right now </label>
            <textarea ref={textAreaContent2} id="message2" name="message"/>
            <br/>
            <label htmlFor="message3">What are you planning today?</label>
            <textarea ref={textAreaContent3} id="message3" name="message"/>

            <button onClick={handleClick}>Click</button>
        </div>
    );
}