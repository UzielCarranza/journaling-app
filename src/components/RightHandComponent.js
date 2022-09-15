import React, {useEffect, useState} from "react";
import {MdOutlineAddCircle} from "react-icons/md";
import {MyEditor} from "./MyEditor";
import {store} from "../globallVariable/store";

export const RightHandComponent = () => {
    const [firstAnswer, setfirstAnswer] = useState(null);
    const [secondAnswer, setSecondAnswer] = useState(null);
    const [thirdAnswer, setThirdAnswer] = useState(null);
    const [editingMode, setEditingMode] = useState(null);



    const firstEditorUserInput = (data) => {
        setfirstAnswer(data);
    }
    const secondEditorUserInput = (data) => {

        setSecondAnswer(data);
    }
    const thirdEditorUserInput = (data) => {
        setThirdAnswer(data);
    }
    const handleSubmit = () => {
        let today = new Date();
        let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        const newEntry =  {
            firstJournalEntry: firstAnswer,
            secondJournalEntry: secondAnswer,
            thirdJournalEntry: thirdAnswer,
            CREATED_AT: date + " " + time,
        }
        console.log(newEntry)

    }

    return (<div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'space-around',
        height: '100%',
        marginLeft: '2%'
    }}>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'end', width: '61%'}}>
            <MdOutlineAddCircle className="add" style={{color: 'green', fontSize: '30'}} onClick={handleSubmit}/>
        </div>
        <p>What kind of day are you having?</p>
        <MyEditor parentCallBack={firstEditorUserInput}/>


        <p>What are your biggest goals right now</p>
        <MyEditor parentCallBack={secondEditorUserInput}/>

        <p>What are you worried about?</p>
        <MyEditor parentCallBack={thirdEditorUserInput}/>
    </div>)

}
