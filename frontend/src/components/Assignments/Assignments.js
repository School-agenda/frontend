import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import styled from "styled-components";




export default class Assignments extends React.Component {
    render() {
      return (
        <StyledForm>
            <StyledBig>Add an Assignment</StyledBig>
          <StyledGroup>
            <StyledLabel for="exampleEmail">Name of Assignment </StyledLabel>
            <StyledInput
              type="text"
              name="email"
              id="exampleEmail"
              placeholder="Name"
            />
          </StyledGroup>


          <StyledGroup>
            <StyledOften for="exampleNumber">How Often Would You Like To Be Reminded? </StyledOften>
            <StyledInput
              type="number"
              name="number"
              id="exampleNumber"
              placeholder="Frequency"
            />
          </StyledGroup>

          <StyledGroup>
            <Label for="exampleDate">Date of Reminder </Label>
            <StyledDate
              type="date"
              name="date"
              id="exampleDate"
              placeholder="date placeholder"
            />
          </StyledGroup>
          <StyledGroup>
            <Label for="exampleTime">Time of Reminder </Label>
            <StyledTime
              type="time"
              name="time"
              id="exampleTime"
              placeholder="time placeholder"
            />
          </StyledGroup>
  
    
          
          <StyledGroup>
            <StyledDes for="exampleText">Description of Assignment (not required) </StyledDes>
            <StyledText type="textarea" name="text" id="exampleText"  />
          </StyledGroup>



          <Button>Submit</Button>
        </StyledForm>
      );
    }
  }

const StyledForm = styled(Form)`
  background-color: #7CF8D3;
  margin-top: 10%;
  border: 7px solid #E90C4F;
  border-radius:3px;
  padding-bottom: 5%;
  padding-top: 5%;
  font-weight: bold;
  width:70%;
  margin-left: 15%;
`

const StyledText = styled(Input)`
  resize: none;
  border-radius: 5px;
  border: 1px solid #7CF8D3;
  background-color: whitesmoke;

`

const StyledInput = styled(Input)`
  border-radius: 5px;
  border: 1px solid #7CF8D3;
  padding: .5%;
  background-color: whitesmoke;
`

const StyledLabel = styled(Label)`
  margin-right: 3%;

`

const StyledOften = styled(Label)`
  margin-left: -14%;
  margin-right: 1.5%;
`
const StyledDate = styled(Input)`
border-radius: 5px;
border: 1px solid #7CF8D3;
padding: .5%;
background-color: whitesmoke;
margin-left: 5.5%;
`

const StyledTime = styled(Input)`
border-radius: 5px;
border: 1px solid #7CF8D3;
padding: .5%;
background-color: whitesmoke;
margin-left: 1.5%;
`

const StyledDes = styled(Label)`
    margin-left: -13%;
    margin-right: 2%;
`

const StyledGroup = styled(FormGroup)`
  margin-bottom: 2%;
`
const StyledBig = styled.h1`
  margin-top: -5%;
  margin-bottom:3%;
`