import React, { Component } from "react";
import EmployeeCard from "../components/EmployeeCard";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import employees from "../employees.json";

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
            if(employee.name.includes(this.state.search)) {
                new_list.push(employee);
            }
            else if(employee.age.includes(this.state.search)) {
                new_list.push(employee);
            }
            else if(employee.email.includes(this.state.search)) {
                new_list.push(employee);
            }
            else if(employee.occupation.includes(this.state.search)) {
                new_list.push(employee);
            }
            else if(employee.location.includes(this.state.search)) {
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
                    <form className="form">
                        <input
                            value={this.state.search}
                            name="SearchParam"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Search..."
                        />
                    </form>
                {this.state.employees.map(employee => (
                    <EmployeeCard
                        openEmployee={this.openEmployee}
                        id={employee.id}
                        key={employee.key}
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