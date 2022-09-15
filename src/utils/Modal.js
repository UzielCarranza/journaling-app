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
background-color: rgba(220,220,220);
margin: 10% auto;
padding: 20px;
width: 90%;
height: auto;
display: flex;
flex-direction: column;
justify-content: space-between;
`;

function Modal({children}) {
    const [shouldShow, setShouldShow] = useState(false);
    const editEntry = () => {
        let today = new Date();
        let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        return {
            type: 'editEntry',
            "id": children.props.children[0].props.children,
            "EntryOne": children.props.children[3].props.value,
            "EntryTwo": children.props.children[5].props.value,
            "EntryThree": children.props.children[7].props.value,
            "CREATED_AT": children.props.children[1].props.children,
            "EDITED_AT": time + " " + date
        }
    }

    const handleEdit = () => {
        setShouldShow(false);
        store.dispatch(editEntry())

        //we can call getState() to retrieve the updated value
        // console.log(store.getState())
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
                            onClick={handleEdit}/>
                        {children}
                    </ModalBody>
                </ModalBackground>
            )}
        </>
    );
}
export default Modal;