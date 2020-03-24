import React, { Component } from "react";
import EmployeeCard from "../components/EmployeeCard";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import employees from "../employees.json";
import Dropdown from "../components/utils/Dropdown";
import DynamicSort from "../components/utils/DynamicSort";

class Directory extends Component {
  state = {
    employees
  };

  filterEmployee = event => {
    if(event.target.value === "Location") {
      const filter_list = employees.filter(employee => employee.location.includes(event.target.innerHTML));
      this.setState({ employees:filter_list });
    }
    else {
      const filter_list = employees.filter(employee => employee.occupation.includes(event.target.innerHTML));
      this.setState({ employees:filter_list });
    }
  };

  sortEmployee = event => {
    let property = event.target.innerHTML.toLowerCase()
    const new_order = this.state.employees.sort(DynamicSort(property))
    this.setState({ new_order });
  };

  render() {
    return (
      <Wrapper>
        <Title>Employee List</Title>
        <Dropdown 
          filterEmployee={this.filterEmployee}
          sortEmployee={this.sortEmployee}
        />
        {this.state.employees.map(employee => (
          <EmployeeCard
            id={employee.id}
            key={employee.key}
            name={employee.name}
            age={employee.age}
            email={employee.email}
            thumbnail={employee.thumbnail}
            occupation={employee.occupation}
            location={employee.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default Directory;