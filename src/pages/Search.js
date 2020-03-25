import React, { Component } from "react";
import EmployeeCard from "../components/EmployeeCard";
import Wrapper from "../components/Wrapper";
import Container from "../components/Container";
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
        const search = this.state.search.toLowerCase();

        employees.filter(employee => {
            if(employee.name.toLowerCase().includes(search)) {
                new_list.push(employee);
            }
            else if(employee.age.toLowerCase().includes(search)) {
                new_list.push(employee);
            }
            else if(employee.email.toLowerCase().includes(search)) {
                new_list.push(employee);
            }
            else if(employee.occupation.toLowerCase().includes(search)) {
                new_list.push(employee);
            }
            else if(employee.location.toLowerCase().includes(search)) {
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
                <Container>
                    <Title>Employee List</Title>
                    <br></br>
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
                </Container>
            </Wrapper>
        );
    }
}

export default Search;