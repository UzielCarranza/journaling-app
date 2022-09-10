import Modal from "../utils/Modal";
import React from "react";

export const LeftHandComponent = () => {
    const newEntry = [
        {
            "id": '1',
            "EntryOne": "text",
            "EntryTwo": "text2",
            "EntryThree": "text3",
            "CREATED_AT": "2022-9-1010:35:30"
        }, {
            "id": '2',
            "EntryOne": "text",
            "EntryTwo": "text2",
            "EntryThree": "text3",
            "CREATED_AT": "2022-8-1010:35:30"
        }
    ]

    const modalContent = (newEntry) => {
        return newEntry ? (
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center'}}>
                    <p>{newEntry.CREATED_AT}</p>

                    <p>What kind of day are you having?</p>
                    <p>{newEntry.EntryOne}</p>

                    <p>What are your biggest goals right now</p>
                    <p>{newEntry.EntryTwo}</p>

                    <p>What are you worried about?</p>
                    <p>{newEntry.EntryThree}</p>
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
