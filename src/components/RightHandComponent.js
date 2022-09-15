import React from "react";
import {MdOutlineAddCircle} from "react-icons/md";
import {MyEditor} from "./MyEditor";

export class RightHandComponent extends React.Component {
    constructor(props) {
        let today = new Date();
        let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        super(props);
        this.state = {
            firstAnswer: "",
            secondAnswer: "",
            thirdAnswer: "",
            CREATED_AT: time + " " + date,
            date_created: date,
        }
        this.store = {
            id: "1"
        }
    }

    callback = (value) => {
        this.state.firstAnswer = value;
    }
    callback2 = (value) => {

        this.state.secondAnswer = value;
    }
    callback3 = (value) => {

        this.state.thirdAnswer = value;
    }
    handleSubmit = () => {

        //TODO: NEEDS POST REQUEST
        console.log(this.state)
    }

     render() {
        return this.state.firstAnswer === "" ? (<div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            justifyContent: 'space-around',
            height: '100%',
            marginLeft: '2%'
        }}>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'end', width: '61%'}}>
                <MdOutlineAddCircle className="add" style={{color: 'green', fontSize: '30'}}
                                    onClick={this.handleSubmit}/>
            </div>
            <h4>{this.state.date_created}</h4>
            <p>What kind of day are you having?</p>

            {this.store.id !== undefined ?
                <MyEditor parentCallBack={this.callback} editingValue={this.store.EntryOne}/> :
                <MyEditor parentCallBack={this.callback}/>}


            <p>What are your biggest goals right now</p>

            {this.store.id !== undefined ?
                <MyEditor parentCallBack={this.callback2} editingValue={this.store.EntryTwo}/> :
                <MyEditor parentCallBack={this.callback2}/>}

            <p>What are you worried about?</p>
            {this.store.id !== undefined ?
                <MyEditor parentCallBack={this.callback3} editingValue={this.store.EntryThree}/> :
                <MyEditor parentCallBack={this.callback3}/>}
        </div>) : ""

    }
}