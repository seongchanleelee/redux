import React, {useState} from "react";
import { connect } from "react-redux"
function Home() {
    const [text, setText] = useState("");
    function onChange (e){
        setText(e.target.value)
    }
    function onSubmit(e) {
        e.preventDefault();
        console.log(text)
        setText("")
    }
    return (
        <div>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange}/>
                <button>Add</button>
            </form>
            <ul>
                <li></li>
            </ul>
        </div>
    )
}

function getCurrentState(state, ownProps) {
    console.log(state, ownProps)
}

export default connect(getCurrentState) (Home);