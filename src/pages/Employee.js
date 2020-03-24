import React, { Component } from "react";
import IndividualCard from "../components/IndividualCard";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import employees from "../employees.json";

let person;
const individual = () => {
  const id = window.location.href.split("employee/");
  if(id[1]) {
    person = employees.filter(obj => {
      return obj.id === parseInt(id[1])
    });
  }
  else {
    person = []
  }
}

individual();

class Employee extends Component {
  state = {
    employee: person[0]
  }

  backToDirectory = () => {
    document.location = "/";
  }
  
  render() {
    return (
      <Wrapper>
        <Title>Employee:</Title>
          <IndividualCard 
            {...this.state.employee}
            backToDirectory={this.backToDirectory}
          />
      </Wrapper>
    );
  }
}

export default Employee;