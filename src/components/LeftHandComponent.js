import Modal from "../utils/Modal";

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
                <div>
                    <p>{newEntry.CREATED_AT}</p>
                </div>
            ) :
            " "

    }

    return newEntry ? <div>
        {
            newEntry.map((item, i) => (
                <div key={newEntry[i].id}>
                    <p className="text-xs italic text-right">{newEntry[i].CREATED_AT}</p>

                    <Modal>
                        {modalContent(newEntry[i])}</Modal>
                </div>

            ))
        }

    </div> : <p>none</p>
}
