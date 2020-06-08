import React from "react";

function Search(props) {
    return(
        
            <tbody>
                <tr>
                    <td>{props.name}</td>
                    <td href={props.picture}></td>
                    <td>{props.city}</td>
                    <td>{props.state}</td>
                    <td>{props.email}</td>
                </tr>
            </tbody>

    );
}

export default Search;