import React, { Component } from "react";
import EmployeeCard from "../components/EmployeeCard";
import Wrapper from "../components/Wrapper";
import Container from "../components/Container";
import Title from "../components/Title";
import employees from "../employees.json";
import Dropdown from "../components/utils/Dropdown";
import DynamicSort from "../components/utils/DynamicSort";
import RandomColor from "../components/utils/RandomColor";

class Directory extends Component {
  state = {
    employees:employees
  };

  filterEmployee = event => {
    if(event.target.value === "Location") {
      if(event.target.innerHTML!=="All") {
        const filter_list = employees.filter(employee => employee.location.includes(event.target.innerHTML));
        this.setState({ employees:filter_list });
      }
      else {
        this.setState({ employees:employees });
      }
    }
    else {
      if(event.target.innerHTML!=="All") {
        const filter_list = employees.filter(employee => employee.occupation.includes(event.target.innerHTML));
        this.setState({ employees:filter_list });
      }
      else {
        this.setState({ employees:employees });
      }
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
        <Container>
          <Title>Employee List</Title>
          <Dropdown 
            filterEmployee={this.filterEmployee}
            sortEmployee={this.sortEmployee}
          />
          <br></br>
          {this.state.employees.map(employee => (
            <EmployeeCard
              id={employee.id}
              key={employee.key}
              color={RandomColor()}
              name={employee.name}
              age={employee.age}
              email={employee.email}
              thumbnail={employee.thumbnail}
              occupation={employee.occupation}
              location={employee.location}
            />
          ))}
        </Container>
      </Wrapper>
    );
  }
}

export default Directory;