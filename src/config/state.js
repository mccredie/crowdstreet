
const INIT_STATE = null;

export default (state=INIT_STATE, action) => {
    switch(action.type) {
        case "CONFIG/CLOSE":
            return null;
        case "CONFIG/OPEN":
            return action.table;
        default:
            return state;
    }
};
