import React from "react";
import {useRef} from "react";

export const RightHandComponent = () => {
    const textAreaContent = useRef(null);
    const textAreaContent2 = useRef(null);
    const textAreaContent3 = useRef(null);

    let today = new Date();

    let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    const handleClick = event => {
        //make POST Request
        const newEntry = {
            "EntryOne": textAreaContent.current.value,
            "EntryTwo": textAreaContent2.current.value,
            "EntryThree": textAreaContent3.current.value,
            "CREATED_AT": date + " " + time
        }
        console.log(newEntry)

    };

    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '40%',
        justifyContent: 'space-between',
        height: '20em',
        marginTop: '5%',
        marginLeft: '2%'
    }}>
        <p>{date}</p>
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
}
