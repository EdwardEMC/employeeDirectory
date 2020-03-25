import React, { Component } from "react";
import EmployeeCard from "../components/EmployeeCard";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import employees from "../employees.json";
import RandomColor from "../components/utils/RandomColor";

class Search extends Component {
    state = {
        search: "",
        employees: employees
    };

    handleInputChange = event => {
        let value = event.target.value;

        this.setState({
            search: value
        }, () => this.filerList());
    };

    filerList = () => {
        let new_list = [];
        
        employees.filter(employee => {
            if(employee.name.toLowerCase().includes(this.state.search)) {
                new_list.push(employee);
            }
            else if(employee.age.toLowerCase().includes(this.state.search)) {
                new_list.push(employee);
            }
            else if(employee.email.toLowerCase().includes(this.state.search)) {
                new_list.push(employee);
            }
            else if(employee.occupation.toLowerCase().includes(this.state.search)) {
                new_list.push(employee);
            }
            else if(employee.location.toLowerCase().includes(this.state.search)) {
                new_list.push(employee);
            }
            return false;
        });

        this.setState({
            employees: new_list
        });
    }

    render() {
        return (
            <Wrapper>
                <Title>Employee List</Title>
                <form className="form d-flex justify-content-center">
                    <input
                        value={this.state.search}
                        name="SearchParam"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Search..."
                    />
                </form>
                <br></br>
                {this.state.employees.map(employee => (
                    <EmployeeCard
                        openEmployee={this.openEmployee}
                        id={employee.id}
                        key={employee.key}
                        color={RandomColor()}
                        name={employee.name}
                        age={employee.age}
                        email={employee.email}
                        image={employee.image}
                        occupation={employee.occupation}
                        location={employee.location}
                    />
                ))}
            </Wrapper>
        );
    }
}

export default Search;