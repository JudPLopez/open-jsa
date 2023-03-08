import { useState } from 'react';
import React from 'react';
import Form from 'react-bootstrap/form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/row';
import StatePicker from './StatePicker';

function JobDetails() {
    const [selectedState, setSelectedState] = useState('');

    const handleStateChange = (e) => {
        setSelectedState(e.target.value)};

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
            <Form.Group className='mb-3' controlId='formGridAddress'>
                <Form.Label>Address</Form.Label>
                <Form.Control type='text' placeholder='123 Main St.'></Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formGridAddress2'>
                <Form.Label>Address 2</Form.Label>
                <Form.Control type='text' placeholder='Apt, Suite, Floor, etc.'></Form.Control>
            </Form.Group>
            <Row className='mb-3'>
                <Form.Group as={Col} controlId='formGridCity'>
                    <Form.Label>City</Form.Label>
                    <Form.Control type='text' />
                </Form.Group>
                <StatePicker value={selectedState} onChange={handleStateChange} />

                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control type='text' placeholder='Enter Zip Code'/>
                </Form.Group>

            </Row>
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

export default JobDetails;