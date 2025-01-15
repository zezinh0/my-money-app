const INITIAL_STATE = { summary: {credit: 0, debt: 0} }

  export default function(state = INITIAL_STATE, action) {
    
    switch (action.type) {
      case 'BILLING_SUMMARY_FETCHED':
        return { ...state, summary: action.payload };
  
      case 'BILLING_SUMMARY_FETCH_FAILED':
        return state;
  
      default:
        return state;
    }
  }