import React, { useState } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';


const UserProfile = ({props, values, errors, touched, status, handleChange}) => {

  
    const [editing, setEditing] = useState(false)
    const [profileEdit, setprofileEdit] = useState({
        name: 'Rayven',
        classes: 'Computer Science'
    })
    
  

    //edit Profile function
   const handleSubmit = e => {
        e.preventDefault();
        setprofileEdit({
            ...profileEdit,
            [e.target.name]: e.target.value
        })
        console.log("Submitted")
    }

    //edit Profile
    const editProfile = e => {
        e.preventDefault();
        setEditing(true);
        console.log('setEditing now === true')
    }

    //Save Profile
    const saveEdit = e => {
        e.preventDefault();

        //add endpoint to local storage
    }

    return(

        <div>
        <h1>User Profile</h1>

        <h3>Name: {profileEdit.name}</h3>
        <h3>Classes: {profileEdit.classes}</h3>

        <button onClick = {editProfile}>Edit Profile</button>
        
        {editing && (
            <Form onSubmit={handleSubmit}>
               
                <Field
                    type = "text"
                    onChange = {e => {
                        setprofileEdit({...profileEdit,
                        name: e.target.value})
                    }}
                    value = {profileEdit.name}
                    placeholder = "Name"
                    />

                    <Field
                    type = "text"
                    onChange = {e => {
                        setprofileEdit({...profileEdit,
                        name: e.target.value})
                    }}
                    value = {profileEdit.classes}
                    placeholder = "Classes"
                    />

                    <button>Submit</button>

            </Form>
        )}




        </div>
    )
}

export default UserProfile