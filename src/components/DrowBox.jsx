import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DrowBox = props => {
    return (
        <div style={{ backgroundColor: `${props.box.mycolor}`, width: `${props.box.mysize}px`, height: `${props.box.mysize}px` }} className="d-inline-flex m-2"></div>
    )
}
export default DrowBox;