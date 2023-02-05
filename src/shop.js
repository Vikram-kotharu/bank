import { useDispatch, useSelector } from "react-redux"
import {actionCreators} from './state/index'
import { bindActionCreators } from "redux"


const Shop = () =>{
    const bobs = useSelector(state => state.amount)

    const dispatch = useDispatch()
    const {Withdraw,Depositmoney} = bindActionCreators(actionCreators,dispatch)
    return(
        <>
        <div>
            <h2>Deposit/Withdrawal Money</h2>
            <br/>
            <button className="btn btn-danger mx-2" onClick={()=>{Withdraw(100)}}>-</button>
            {bobs}
            <button className="btn btn-primary mx-2"  onClick={()=>{Depositmoney(100)}}>+</button>
        </div>

        </>
    )
}

export default Shop