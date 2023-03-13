import React from 'react';
import './Jsa-Components.scss'

function SignatureInput(props) {
  const { name, value, onChange } = props;

  return (
    <div className="signature-input">
      <label htmlFor={name}>{name}</label>
      <input id={name} name={name} value={value} onChange={onChange} />
    </div>
  );
}

export default SignatureInput;