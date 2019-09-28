import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import styled from "styled-components";




export default class Assignments extends React.Component {
    render() {
      return (
        <Form>

          <FormGroup>
            <Label for="exampleEmail">Name of Assignment</Label>
            <Input
              type="text"
              name="email"
              id="exampleEmail"
              placeholder="with a placeholder"
            />
          </FormGroup>


          <FormGroup>
            <Label for="exampleNumber">Number</Label>
            <Input
              type="number"
              name="number"
              id="exampleNumber"
              placeholder="number placeholder"
            />
          </FormGroup>

          <FormGroup>
            <Label for="exampleDate">Date of Reminder</Label>
            <Input
              type="date"
              name="date"
              id="exampleDate"
              placeholder="date placeholder"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleTime">Time of Reminder</Label>
            <Input
              type="time"
              name="time"
              id="exampleTime"
              placeholder="time placeholder"
            />
          </FormGroup>
  
    
          
          <FormGroup>
            <Label for="exampleText">Description</Label>
            <Input type="textarea" name="text" id="exampleText"  />
          </FormGroup>


          <FormGroup check>
            <Label check>
              <Input type="checkbox" /> Check me out
            </Label>
          </FormGroup>
        </Form>
      );
    }
  }

