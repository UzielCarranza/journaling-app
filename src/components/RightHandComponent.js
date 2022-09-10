import React from "react";
import {useRef} from "react";
import {MdOutlineAddCircle} from "react-icons/md";
import {BsFillTrashFill} from "react-icons/bs";

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

    const resetValues = () => {
        textAreaContent.current.value = '';
        textAreaContent2.current.value = '';
        textAreaContent3.current.value = '';
    }

    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '40%',
        justifyContent: 'space-between',
        height: '20em',
        marginTop: '5%',
        marginLeft: '2%'
    }}>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}><p>{date}</p>
            <div><MdOutlineAddCircle onClick={handleClick} style={{color: 'green'}}/> <BsFillTrashFill
                onClick={resetValues}
                style={{color: 'red'}}/>
            </div>
        </div>
        <label htmlFor="message">What does your normal day looks like</label>
        <textarea ref={textAreaContent} id="message" name="message"/>
        <br/>
        <label htmlFor="message2">What are your biggest goals right now </label>
        <textarea ref={textAreaContent2} id="message2" name="message"/>
        <br/>
        <label htmlFor="message3">What are you planning today?</label>
        <textarea ref={textAreaContent3} id="message3" name="message"/>
    </div>
}
