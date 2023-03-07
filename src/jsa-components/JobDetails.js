import React from 'react';
import Form from 'react-bootstrap/form';
import { InputGroup } from 'react-bootstrap/InputGroup';

function JobDetails() {
  return (
    <Form className='job-details-container'>
        <Form.Group className='mb-3' controlId='formBasicDate'>
            <Form.Label>Date: </Form.Label>
            <Form.Control type='date'></Form.Control> 
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicJobNumber'>
            <Form.Label>Job/Work Order #: </Form.Label>
            <Form.Control type='text' placeholder='work order #'></Form.Control>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicTask'>
            <Form.Label>Tasks: </Form.Label>
            <Form.Control as='textarea' placeholder='Summary of Job Tasks'></Form.Control>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicLocation'>
            <Form.Label>Address: </Form.Label>
            <Form.Control type='text' placeholder='Street'></Form.Control>
            <Form.Control type='text' placeholder='State'></Form.Control>
            <Form.Control type='text' placeholder='City'></Form.Control>
            <Form.Control type='text' placeholder='Zip Code'></Form.Control>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicSupervisor'>
            <Form.Label>Supervisor/Foreman: </Form.Label>
            <Form.Control type='text' placeholder='Supervisor Name'></Form.Control>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPreparer'>
            <Form.Label>JSA Prepared by: </Form.Label>
            <Form.Control type='text' placeholder='Preparer Name'></Form.Control>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPPE'>
            <Form.Label>PPE Required: </Form.Label>
            <Form.Control as='textarea' placeholder='Required PPE...'></Form.Control>
        </Form.Group>
    </Form>
  )
}

export default JobDetails