import React from "react";
import Header from "./components/header";
import Search from "./components/search";
import Table from "./components/table";

function App() {
    return (
        <div className="container">
            <Header />
            <Search />
            <table className= "striped bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Picture</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <Table />
            </table>
        </div>
    )
}

export default App;