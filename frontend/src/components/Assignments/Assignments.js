import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import styled from "styled-components";




export default class Assignments extends React.Component {
    render() {
      return (
        <StyledForm>

          <FormGroup>
            <Label for="exampleEmail">Name of Assignment </Label>
            <StyledInput
              type="text"
              name="email"
              id="exampleEmail"
              placeholder="with a placeholder"
            />
          </FormGroup>


          <FormGroup>
            <Label for="exampleNumber">How Often Would You Like To Be Reminded? </Label>
            <StyledInput
              type="number"
              name="number"
              id="exampleNumber"
              placeholder="number placeholder"
            />
          </FormGroup>

          <FormGroup>
            <Label for="exampleDate">Date of Reminder </Label>
            <StyledInput
              type="date"
              name="date"
              id="exampleDate"
              placeholder="date placeholder"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleTime">Time of Reminder </Label>
            <StyledInput
              type="time"
              name="time"
              id="exampleTime"
              placeholder="time placeholder"
            />
          </FormGroup>
  
    
          
          <FormGroup>
            <Label for="exampleText">Description of Assignment (not required) </Label>
            <StyledText type="textarea" name="text" id="exampleText"  />
          </FormGroup>



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