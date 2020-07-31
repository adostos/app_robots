import React from 'react';

const Scroll = (props) => {
    return(
        <div style={{overflowY: 'scroll', height: '460px', border: '1px solid black'}}>
            {props.children}
        </div>
    )
}

export default Scroll;