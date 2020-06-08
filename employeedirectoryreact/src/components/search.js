import React from "react";

function Table(props) {
    return (
        <div className="nav-content">
            <form onSubmit={(e)=>e.preventDefault()}>
                <div className="input-field">
                    <label className="label-icon" htmlFor="search"><i className="material-icons"></i></label>
                    <input
                    onChange={props.handleInputChange}
                    value={props.search}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search for an employee"
                    id="search"
                    />
                </div>
            </form>
        </div>
    );
}
        

export default Table;