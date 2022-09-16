import styled from 'styled-components';
import {useState} from "react";
import {MdMore, MdOutlineModeEditOutline} from "react-icons/md";
import {FaWindowClose} from "react-icons/fa";
import {store} from "../globallVariable/store";
import {storeUpdate} from "../components/RightHandComponent";

const ModalBackground = styled.div`
position: fixed;
z-index: 4;
left: 0;
top: 0;
width: 100%;
height: 100%;
overflow: auto;
background-color: rgb(0,0,0,0.5);
`;

const ModalBody = styled.div`
background-color: #003249;
margin: 10% auto;
padding: 20px;
width: 50%;
height: auto;
display: flex;
flex-direction: column;
justify-content: space-between;
color: #fff
`;

function Modal({children}) {
    const [shouldShow, setShouldShow] = useState(false);

    const editEntry = (entry) => {
        let today = new Date();
        let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        return {
            type: 'editEntry',
            "EntryOne": entry.props.children[3].props.children,
            "EntryTwo": entry.props.children[5].props.children,
            "EntryThree": entry.props.children[6].props.value,
            "CREATED_AT": entry.props.children[0].props.children,
            "EDITED_AT": time + " " + date
        }
    }

    const handleEdit = (entry) => {
        setShouldShow(false);
        store.dispatch(editEntry(entry))
        console.log(store.getState())
    }

    return (
        <>
            <div className="flex justify-center">
                <MdMore className="text-white shadow-btn w-24 mt-4 cursor-pointer" onClick={() => setShouldShow(true)}/>
            </div>
            {shouldShow && (
                <ModalBackground>
                    <ModalBody onClick={(e) => e.stopPropagation()}>
                        <FaWindowClose style={{ fontSize:'20', width: '30%', color: 'red', justifySelf: 'start', display: 'flex', alignSelf: 'end'}} onClick={() => setShouldShow(false)}/>
                        <MdOutlineModeEditOutline
                            style={{ fontSize:'20', width: '30%', color: 'brown', justifySelf: 'start', display: 'flex', alignSelf: 'end'}}
                            onClick={() => handleEdit(children)}/>
                        {children}
                    </ModalBody>
                </ModalBackground>
            )}
        </>
    );
}
export default Modal;