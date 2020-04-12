
export default (state={}, action) => {
    switch(action.type) {
        case "WORM/SET":
            return {...state, ...action.payload};
        default:
            return state;
    }
}
