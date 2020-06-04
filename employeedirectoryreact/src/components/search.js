import React from "react";

function Search(props) {
    return (
        <div className="nav-content">
            <form onSubmit={(e)=>e.preventDefault()}>
                <div className="input-field">
                    <label class="label-icon" for="search"><i class="material-icons"></i></label>
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
        

export default Search;