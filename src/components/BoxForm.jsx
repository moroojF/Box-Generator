import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BoxForm = props => {
    const [mycolor, setMycolor] = useState("");
    const mydrow = e => {
        e.preventDefault();
        const newBox = { mycolor };
        props.setBox(newBox);
        setMycolor("")
    }
    return (
        <form onSubmit={mydrow}>
            <div className="form-grpup">
                <label>Color:</label>
                <input type="text" className="form-control" onChange={e => setMycolor(e.target.value)} value={mycolor} />
                <input type="submit" className="btn btn-outline-secondary my-4" value="Create" />
            </div>
        </form>
    )
}
export default BoxForm;
