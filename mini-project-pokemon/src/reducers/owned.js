const ownedReducer = (state = null, action) => {
    switch(action.type) {
        case 'CATCH_EM_ALL':
            return state - action.payload;
        default:
            return state;
    }
};

export default ownedReducer;