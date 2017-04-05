export default function todoReducer( state: Array<Object> = [], action): Array<Object> {
    switch( action.type ){
        case "Add_Todo":
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ];

        case "Complete_Todo":
            return [
                ...state.slice(0, action.index),
                Object.assign( {}, state[action.index], {
                    completed: true
                }),
                ...state.slice(action.index + 1)
            ]

        default:
            return state;
    }
}