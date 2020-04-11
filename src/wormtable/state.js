
export default (state={}, action) => {
    switch(action.type) {
        case "WORM/SET/N":
                return {...state, n: action.payload};
        case "WORM/SET/X":
                return {...state, x: action.payload};
        case "WORM/SET/M":
                return {...state, m: action.payload};
        default:
            return state;
    }
}
