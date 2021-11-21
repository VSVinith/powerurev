import React from 'react'

function Popup(props)  {
    return (props.trigger)  ? (
        <div>
            <div>
                <button>close</button>
                {props.children}
            </div>
        </div>
    ) : "";
} 

export default Popup