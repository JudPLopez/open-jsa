import React from 'react';
import { Form } from 'react-bootstrap';

const states = [
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID',
  'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS',
  'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK',
  'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV',
  'WI', 'WY'
];

function StatePicker(props) {
  return (
    <Form.Group controlId="stateSelect">
      <Form.Label>State</Form.Label>
      <Form.Select value={props.value} onChange={props.onChange}>
        <option value="">Choose</option>
        {states.map((state) => (
          <option key={state} value={state}>{state}</option>
        ))}
      </Form.Select>
    </Form.Group>
  );
}

export default StatePicker;
