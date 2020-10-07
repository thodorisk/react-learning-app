import React from "react";
import Validation from "../Validation/Validation";
import Charbox from "../Charbox/Charbox";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`;

const person = (props) => {
  const charList = props.name.split("").map((char, index) => {
    return <Charbox character={char} key={index} />;
  });
  return (
    <StyledDiv>
      <p onClick={props.click}>
        i am {props.name} and i am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}></input>
      <Validation inputLength={props.name.length} />
      {charList}
    </StyledDiv>
  );
};

export default person;
