import { useState } from 'react';
import React from 'react';
import Form from 'react-bootstrap/form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/row';
import StatePicker from './StatePicker';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function JobDetails({formData, setFormData}) {
    const [selectedState, setSelectedState] = useState('');
    
    const handleStateChange = (e) => {
        setSelectedState(e.target.value)};
    
    const handlePpeChange = (value) => {
        setFormData({...formData, ppe: value})
    }

    return (
        <Form className='job-details-container'>
            <Form.Group className='mb-3' controlId='formBasicDate'>
                <Form.Label>Date: </Form.Label>
                <Form.Control 
                    type='date'
                    value={formData.date}
                    onChange={(e) => {
                        setFormData({...formData, date: e.target.value});
                    }}           
                />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicJobNumber'>
                <Form.Label>Job/Work Order #: </Form.Label>
                <Form.Control 
                    type='text' 
                    placeholder='work order #'
                    value={formData.workOrder}
                    onChange={(e) => {
                        setFormData({...formData, workOrder: e.target.value});
                    }}
                />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicTask'>
                <Form.Label>Tasks: </Form.Label>
                <Form.Control 
                    as='textarea' 
                    placeholder='Summary of Job Tasks'
                    value={formData.tasks}
                    onChange={(e) => {
                        setFormData({...formData, tasks: e.target.value});
                    }}
                />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formGridAddress'>
                <Form.Label>Address</Form.Label>
                <Form.Control 
                    type='text' 
                    placeholder='123 Main St.'
                    value={formData.addressOne}
                    onChange={(e) => {
                        setFormData({...formData, addressOne: e.target.value});
                    }} 
                />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formGridAddress2'>
                <Form.Label>Address 2</Form.Label>
                <Form.Control 
                    type='text' 
                    placeholder='Apt, Suite, Floor, etc.'
                    value={formData.addressTwo}
                    onChange={(e) => {
                        setFormData({...formData, addressTwo: e.target.value});
                    }} 
                />
            </Form.Group>
            <Row className='mb-3'>
                <Form.Group as={Col} controlId='formGridCity'>
                    <Form.Label>City</Form.Label>
                    <Form.Control 
                        type='text'
                        placeholder='City of Job Location'
                        value={formData.city}
                        onChange={(e) => {
                            setFormData({...formData, city: e.target.value});
                        }}  
                    />
                </Form.Group>
                <StatePicker 
                    value={selectedState} 
                    onChange={handleStateChange} 
                />

                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control 
                        type='text' 
                        placeholder='Enter Zip Code'
                        value={formData.zipCode}
                        onChange={(e) => {
                            setFormData({...formData, zipCode: e.target.value});
                        }}  
                    />
                </Form.Group>

            </Row>
            <Form.Group className='mb-3' controlId='formBasicSupervisor'>
                <Form.Label>Supervisor/Foreman: </Form.Label>
                <Form.Control 
                    type='text' 
                    placeholder='Supervisor Name'
                    value={formData.supervisor}
                    onChange={(e) => {
                        setFormData({...formData, supervisor: e.target.value});
                    }}  
                />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicPreparer'>
                <Form.Label>JSA Prepared by: </Form.Label>
                <Form.Control 
                    type='text' 
                    placeholder='Preparer Name'
                    value={formData.preparer}
                    onChange={(e) => {
                        setFormData({...formData, preparer: e.target.value});
                    }}  
                />
            </Form.Group>
            <Form.Group className='mb-3' controlId='qillBasicPPE'>
                <Form.Label>PPE Required: </Form.Label>
                <ReactQuill 
                    value={formData.ppe}
                    theme='snow'
                    placeholder='List of required PPE'
                    onChange={handlePpeChange}
                />
            </Form.Group>
        </Form>
    )
}

export default JobDetails;