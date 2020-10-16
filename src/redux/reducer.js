// initial state
const initialState = {
    entries: [
        {
            date: '2020-10-15',
            mood: 'On top of the world'
        },
        {
            date: '2020-10-13',
            mood: 'Tired'
        }
    ]
}

// action types
const ADD_ENTRY = 'ADD_ENTRY';

// action creator functions (don't forget to export!)
export function addEntry(moodObj) {
    return {
        type: ADD_ENTRY,
        payload: moodObj
    }
}

// reducer (don't forget to export default)
export default function reducer(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case ADD_ENTRY:
            const newEntry = [payload, ...state.entries]

            return {
                ...state,
                entries: newEntry
            }
        default: return state;
    }
}