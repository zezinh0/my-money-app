const INITIAL_STATE = { summary: {credit: 0, debt: 0} }

  export default function(state = INITIAL_STATE, action) {
    console.log('TT111');
    
    switch (action.type) {
      case 'BILLING_SUMMARY_FETCHED':
        console.log('TT222');
        return { ...state, summary: action.payload };
  
      case 'BILLING_SUMMARY_FETCH_FAILED':
        console.log('TT444');
        return state;
  
      default:
        console.log('TT333');
        console.log(state);
        return state;
    }
  }