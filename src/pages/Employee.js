import React, { Component } from "react";
import IndividualCard from "../components/IndividualCard";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import Container from "../components/Container";

class Employee extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Title>Employee:</Title>
            <IndividualCard />
        </Container>
      </Wrapper>
    );
  }
}

export default Employee;