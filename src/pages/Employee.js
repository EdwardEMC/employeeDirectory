import React, { Component } from "react";
import IndividualCard from "../components/IndividualCard";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import employees from "../employees.json";

let person;
const individual = () => {
  //add if statement for if they click straight onto the employee tab
  const id = window.location.href.split("employee/");
  console.log(id[1]);
  person = employees.filter(obj => {
    return obj.id === parseInt(id[1])
  });
}

individual();

class Employee extends Component {
  state = {
    employee: person[0]
  }

  render() {
    return (
      <Wrapper>
        <Title>Employee:</Title>
          <IndividualCard
            id={this.state.employee.id}
            key={this.state.employee.key}
            name={this.state.employee.name}
            age={this.state.employee.age}
            email={this.state.employee.email}
            image={this.state.employee.image}
            occupation={this.state.employee.occupation}
            location={this.state.employee.location}
          />
      </Wrapper>
    );
  }
}

export default Employee;