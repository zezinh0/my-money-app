const INITIAL_STATE = {selected: '', visible: {} }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'TAB_SELECT':
            console.log('98989989')
            return { ...state, selected: action.payload}
        case 'TAB_SHOWED':
            return { ...state, visible: action.payload}
        default:
            return state
    }
}