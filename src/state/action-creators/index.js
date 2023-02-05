

export const Depositmoney = (amount) =>{
    return (dispatch) =>{
        dispatch({
            type:'Deposit',
            payload: amount
        })
    }
}

export const Withdraw = (amount) =>{
   return (dispatch) =>{
       dispatch({
        type: 'Withdraw',
        payload: amount
       })

   }
}

