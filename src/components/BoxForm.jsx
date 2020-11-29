import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BoxForm = props => {
    const [mycolor, setMycolor] = useState("");
    const [mysize, setMysize] = useState(0);

    const mydrow = e => {
        e.preventDefault();
        const newBox = { mycolor, mysize };
        props.setBox(newBox);
        setMycolor("");
        setMysize(0);
    }
    return (
        <form onSubmit={mydrow}>
            <div className="form-grpup">
                <label>Color:</label>
                <input type="text" className="form-control" onChange={e => setMycolor(e.target.value)} value={mycolor} />
            </div>
            <div className="form-grpup">
                <label>Size:</label>
                <input type="number" className="form-control" onChange={e => setMysize(e.target.value)} value={mysize} />
                <input type="submit" className="btn btn-outline-secondary my-4" value="Create" />
            </div>
        </form>
    )
}
export default BoxForm;
