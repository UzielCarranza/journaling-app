import Modal from "../utils/Modal";
import React from "react";

export const LeftHandComponent = () => {
    const newEntry = [
        {
            "id": '1',
            "EntryOne": "I was feeling optimistic",
            "EntryTwo": "Finish strong",
            "EntryThree": "Space and other things",
            "CREATED_AT": "2022-9-10 10:35:30"
        }, {
            "id": '2',
            "EntryOne": "I was feeling optimistic",
            "EntryTwo": "Finish strong",
            "EntryThree": "Space and other things",
            "CREATED_AT": "2022-7-10 10:35:30"
        }
    ]

    const modalContent = (newEntry) => {
        return newEntry ? (
                <div style={{width: '40%', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', margin: '0 auto'}}>
                    <p>{newEntry.CREATED_AT}</p>

                    <p>What kind of day are you having?</p>
                    <textarea style={{textAlign: 'center'}} value={newEntry.EntryOne}/>

                    <p>What are your biggest goals right now</p>
                    <textarea style={{textAlign: 'center'}} value={newEntry.EntryTwo}/>

                    <p>What are you worried about?</p>
                    <textarea style={{textAlign: 'center'}} value={newEntry.EntryThree}/>
                </div>
            ) :
            <p>loading</p>

    }

    return newEntry ? <div style={{width: '50%', margin: '0 auto'}}>
            <p>Past Entries</p>
            {
                newEntry.map((item, i) => (
                    <div key={newEntry[i].id}>
                        <p className="text-xs italic text-right">{newEntry[i].CREATED_AT}</p>

                        <Modal>
                            {modalContent(newEntry[i])}</Modal>
                    </div>

                ))
            }</div>
        : <p>loading</p>
}
