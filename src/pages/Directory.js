import React, { Component } from "react";
import EmployeeCard from "../components/EmployeeCard";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import employees from "../employees.json";
import Dropdown from "../components/utils/Dropdown";

class Directory extends Component {
  state = {
    employees
  };

  openEmployee = () => {
    console.log("open");
  }

  filterEmployee = event => {
    console.log(event.target.innerHTML);
    // const employees = this.state.employees.filter(employee => employee.id !== id);
    // this.setState({ employees });
  };

  sortEmployee = event => {
    let property = event.target.innerHTML.toLowerCase()
    const new_order = this.state.employees.sort(this.dynamicSort(property))
    this.setState({employees: new_order});
  };

  dynamicSort = property => {
    var sortOrder = 1;
    return function (a,b) {
      var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
    }
  }

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
            openEmployee={this.openEmployee}
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