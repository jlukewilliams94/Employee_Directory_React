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

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
          [name]: value
        });
    
        //creating a new array by taking in new search value by using filter
        let newResult = this.state.result.filter(employee =>{
          // console.log(employee.name.first.toLowerCase().indexOf(this.state.search), employee.name,employee.name.last.toLowerCase().indexOf(this.state.search))
          return employee.name.first.toLowerCase().indexOf(value)>-1 || employee.name.last.toLowerCase().indexOf(value)>-1
        })
        //this updates the existing result state
        this.setState({
          result: newResult
        })
        //conditional statement to load the original results once search length is at 0
        if (value.length===0){
          API.users()
          .then(res => this.setState({ result: res.data.results }))
          .catch(err => console.log(err));
        }
    
    };

    render () {
        return (
            <div className="container">
                <Header />
                <Search value={this.state.search}
                handleInputChange={this.handleInputChange}
                />
                <table className= "striped bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Picture</th>
                            <th>City</th>
                            <th>Phone</th>
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
                        phone={element.phone}
                        />
                    ))}
                </table>
            </div>
        );
    };
}

export default App;