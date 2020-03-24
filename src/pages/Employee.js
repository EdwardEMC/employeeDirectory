import React, { Component } from "react";
import IndividualCard from "../components/IndividualCard";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";

class Employee extends Component {
  render() {
    return (
      <Wrapper>
        <Title>Employee:</Title>
          <IndividualCard />
      </Wrapper>
    );
  }
}

export default Employee;