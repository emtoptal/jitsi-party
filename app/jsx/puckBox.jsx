import React from 'react';

const PuckBox = (props) => {
        return (
            <div className={props.style} onClick={props.handleClick} onMouseOver={props.handleTouch}>
              <img className='image' src={props.image} />
            </div>
        )
}
export default PuckBox;
