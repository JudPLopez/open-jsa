import { useState } from 'react';
import React from 'react';
import Form from 'react-bootstrap/form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function JobAnalysis() {
    const [selectedState, setSelectedState] = useState('');

    const handleStateChange = (e) => {
        setSelectedState(e.target.value)};

    return (
        <Form className='job-analysis-container'>
            <Form.Group className='mb-3' controlId='quillJobActivites'>
                <Form.Label>Job Activities: </Form.Label>
                <ReactQuill 
                    value={FormData.text}
                    theme='snow'
                />
                <Form.Label>Job Hazards:</Form.Label>
                <ReactQuill 
                    value={FormData.text}
                    theme='snow'
                />
                <Form.Label>Hazard Mitigation/Controls:</Form.Label>
                <ReactQuill 
                    value={FormData.text}
                    theme='snow'
                />
            </Form.Group>
            
        </Form>
    )
}

export default JobAnalysis;