import React from 'react'
import { connect } from 'react-redux'

const MassageList = (props) => {
    const {massages, start} = props
    return (
        <div>
            {start === false ? <div>Load</div> : <ul>{massages}</ul>}
        </div>
    )
}
const mapStateToProps = state => state.chatReducerState;

export default connect(mapStateToProps) (MassageList)
