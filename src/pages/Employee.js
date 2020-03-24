import React, { Component } from "react";
import EmployeeCard from "../components/EmployeeCard";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
// import employees from "../employees.json";

class Employee extends Component {
//   state = {
//     employee
//   };

  render() {
    return (
      <Wrapper>
        <Title>Employee:</Title>
          <EmployeeCard
            // id={employee.id}
            // key={employee.key}
            // name={employee.name}
            // age={employee.age}
            // email={employee.email}
            // thumbnail={employee.thumbnail}
            // occupation={employee.occupation}
            // location={employee.location}
          />
      </Wrapper>
    );
  }
}

export default Employee;