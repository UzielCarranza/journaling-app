import styled from 'styled-components';
import {useState} from "react";

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

    return (
        <>
            <div className="flex justify-center">
                <button className="text-white shadow-btn w-24 mt-4 cursor-pointer" onClick={() => setShouldShow(true)}>
                    More Details
                </button>
            </div>
            {shouldShow && (
                <ModalBackground>
                    <ModalBody onClick={(e) => e.stopPropagation()}>
                        {children}
                        <button className="cursor-pointer w-3/4 mx-auto text-white shadow-btn mt-[16px]" onClick={() => setShouldShow(false)}>
                            Close
                        </button>
                    </ModalBody>
                </ModalBackground>
            )}
        </>
    );
}
export default Modal;