const Reducer = (state=0,action) =>{
    if (action.type === 'Deposit'){
        return state + action.payload
    }

    if (action.type === 'Withdraw'){
        return state - action.payload
    }

    else{
        return state
    }

}

export default Reducer