const INITIAL_STATE = { list: [] }

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'BILLING_CYCLES_FETCHED':
            return { ...state, list: action.payload}
        case 'BILLING_CYCLES_FETCH_FAILED':
            return state
        default:
            return state
    }


}