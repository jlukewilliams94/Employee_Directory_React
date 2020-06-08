import React from "react";

function Search(props) {
    return(
        
            <tbody>
                <tr>
                    <td>{props.name}</td>
                    <td><img src={props.picture} alt=""></img></td>
                    <td>{props.city}</td>
                    <td>{props.phone}</td>
                    <td>{props.email}</td>
                </tr>
            </tbody>

    );
}

export default Search;