import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({reducer: userReducer})

//A reducer is a function that receives the current state and an action object, decides how to update the state if necessary, and returns the new state
function userReducer(state = {
    "id": null,
    "EntryOne": null,
    "EntryTwo": null,
    "EntryThree": null,
    "CREATED_AT": null
}, action) {
    // Check to see if the reducer cares about this action
    if (action.type === 'editEntry') {
        // If so, make a copy of `state`
        return {
            ...state,
            // and update the copy with the new value
            "id": action.id,
            "EntryOne": action.EntryOne,
            "EntryTwo": action.EntryTwo,
            "EntryThree": action.EntryThree,
            "CREATED_AT": action.CREATED_AT,
            "EDITED_AT": action.EDITED_AT
        }
    }
    // otherwise return the existing state unchanged
    return state
}