import React from 'react';

const Shape = (props) => {
    console.log("Line 4 in Shape.js, testing props", props.shape)
    // every new prop, new line, new variable, can manipulate from the variable
    // now this used as event listener
    const shape = props.shape
    const selectShape = props.selectShape
    return (
        // <div className="square"/> hard-codes all to be square
        // <div className="props.shape"/> allows dynamic, so it can be square, circle or triangle
                    // objectName.keyName
                    // returns value of keyName
                    // BUT using props isntead of objectName
                    // prop.keyName
        // Just setting a HTML property, so don't need opening and closeing tags
        <div className={props.shape} onClick={() => selectShape(shape)} />
    )
}

export default Shape;