import React, { Component } from "react";
import Header from "./components/header";
import Search from "./components/search";
import Table from "./components/table";
import API from './utils/API';


class App extends Component {

    state = {
      result: [],
      search: ""
    };

    componentDidMount() {
        API.users()
          .then(res => this.setState({ result: res.data.results }))
          .catch(err => console.log(err));
    };

    render () {
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
                    {this.state.result.map((element, index) => (
                    <Table
                        key={index}
                        name={element.name.first + " " + element.name.last}
                        picture={element.picture.medium}
                        city={element.location.city}
                        email={element.email}
                        state={element.location.state}
                        />
                    ))}
                </table>
            </div>
        );
    };
}

export default App;