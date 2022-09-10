import React from "react";
import {MdOutlineAddCircle} from "react-icons/md";
import {BsFillTrashFill} from "react-icons/bs";
import {MyEditor} from "./MyEditor";

export class RightHandComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstEntry: "",
            secondEntry: "",
            thirdEntry: "",
            CREATED_AT: ""
        }
    }

    callback = (value) => {
        let today = new Date();
        let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        this.state.firstEntry = value;
        this.state.CREATED_AT = time + " " + date;
    }
    callback2 = (value) => {

        this.state.secondEntry = value;
    }
    callback3 = (value) => {

        this.state.thirdEntry = value;
    }
    handleSubmit = () => {

        //TODO: NEEDS POST REQUEST
        console.log(this.state)
    }

    render() {
        return <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            justifyContent: 'space-around',
            height: '100%',
            marginLeft: '2%'
        }}>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'end', width: '60%'}}>
                <MdOutlineAddCircle className="add" style={{color: 'green', fontSize: '30'}} onClick={this.handleSubmit}/>
                <BsFillTrashFill className="delete" style={{color: 'red', marginLeft: '5%', fontSize: '30'}}/>

            </div>
            <p>What kind of day are you having?</p>
            <MyEditor parentCallBack={this.callback}/>

            <p>What are your biggest goals right now</p>
            <MyEditor parentCallBack={this.callback2}/>

            <p>What are you worried about?</p>
            <MyEditor parentCallBack={this.callback3}/>
        </div>

    }
}