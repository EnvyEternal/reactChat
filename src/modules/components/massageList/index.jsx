import React,{useState} from 'react'
import { connect } from 'react-redux'

const MassageList = (props) => {
    const {massages, start} = props
    const [img, setImg] = useState(0)
    const mapMs = (massages) => {
        return(
            <li>
                {img} {massages}
            </li>
        );
    };
    return (
        <div>
            {start === false ? <div>Load</div> : <ul>{mapMs}</ul>}
        </div>
    )
}
const mapStateToProps = state => state.chatReducerState;

export default connect(mapStateToProps) (MassageList)
