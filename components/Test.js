import React from 'react'
import { 
    // Use "useSelector" and "useDispatch" for Redux hooks 
    useSelector, useDispatch 
} from "react-redux";

class TestComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        console.log(this.props);
    }

    triggerChange(e) {
        this.props.dispatch({
            type: 'CHANGE_STORE_VALUE',
            storeValue: 'new store value'
        })
    }

    render() {
        return (
            <div>
            <br/>
            <p>From store directly: {this.props.storeValue}</p>
            <br/>
            <button onClick={(e) => {this.triggerChange(e)}}>Redux Hook Store</button>
            </div>
        )
    }
}

export default function Test(){

    // Get current state of specific attribute name in store
    const storeValue = useSelector(state => state.foo)
    // Get Redux dispatcher, preparing to update data to store
    const dispatch = useDispatch()

    return (
        <TestComponent 
            storeValue={storeValue}
            dispatch={dispatch}
        />
    );
};