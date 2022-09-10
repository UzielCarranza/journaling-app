import React, {useRef} from "react";
import {SplitScreen} from "./SplitScreen";
import {LeftHandComponent} from "./LeftHandComponent";
import {RightHandComponent} from "./RightHandComponent";

export const Home = () => {

    return (
        <SplitScreen
            left={LeftHandComponent}
            right={RightHandComponent}
        >
            <LeftHandComponent name="Left component"/>
            <RightHandComponent message="right component"/>
        </SplitScreen>
    );
}