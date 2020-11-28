import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DrowBox = props => {
    return (
        <div style={{ backgroundColor: `${props.box.mycolor}`, width: 120, height: 120 }} className="d-inline-flex m-2"></div>
    )
}
export default DrowBox;