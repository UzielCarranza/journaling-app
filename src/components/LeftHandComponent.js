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
                <div style={{
                    width: '40%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    textAlign: 'center',
                    margin: '0 auto'
                }}>
                    <p>{newEntry.CREATED_AT?.slice(0,10)}</p>

                    <div className="past-entries--wrapper">
                        <h4>1.- What kind of day are you having?</h4>
                        <p style={{textAlign: 'center'}}>{newEntry.EntryOne}</p>
                    </div>

                    <div className="past-entries--wrapper">
                        <h4>2.- What are your biggest goals right now</h4>
                        <p style={{textAlign: 'center'}}>{newEntry.EntryTwo}</p>
                    </div>

                    <div className="past-entries--wrapper">
                        <h4>3.- What are you worried about?</h4>
                        <p style={{textAlign: 'center'}}>{newEntry.EntryThree}</p>
                    </div>
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

                        <Modal>{modalContent(newEntry[i])}</Modal>
                    </div>

                ))
            }</div>
        : <p>loading</p>
}
