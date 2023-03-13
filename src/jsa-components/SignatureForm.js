import React, { useState , useRef } from 'react';
import SignaturePad from 'react-signature-canvas'; // a library for canvas signature
import SignatureInput from './SignatureInput'; // a custom component for typed signature
// import Form components from react-bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SignatureForm() {
  // Declare state variables using useState Hook
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [signatures, setSignatures] = useState([]); // an array of signatures
  const [currentSignature, setCurrentSignature] = useState(''); // the current signature

  // Declare a ref variable using useRef Hook
  const sigPadRef = useRef(null);

  // Define event handlers
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCompanyChange = (event) => {
    setCompany(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSignatureChange = (event) => {
    setCurrentSignature(event.target.value);
  };

  const handleClear = () => {
    setCurrentSignature('');
    if (sigPadRef.current) {
      sigPadRef.current.clear();
    }
  };

  const handleSave = () => {
    if (sigPadRef.current) {
      // get the signature data URL from canvas
      const signature = sigPadRef.current.getTrimmedCanvas().toDataURL('image/png');
      // add it to the signatures array
      setSignatures([...signatures, {name, company, phone, signature}]);
      // clear the current signature
      setCurrentSignature('');
      sigPadRef.current.clear();
    }
    else if (currentSignature) {
      // add the typed signature to the signatures array
      setSignatures([...signatures, {name, company, phone, signature: currentSignature}]);
      // clear the current signature
      setCurrentSignature('');
    }
    
    if (signatures.length >=30){
        alert("You have reached maximum number of signatures");
        return;
     }

    // reset the input fields
    setName('');
    setCompany('');
    setPhone('');
  };

  // Determine if the device is a touch device
  const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0);

  return (
    <div className="signature-form">
      {/* use Form.Group and Form.Label components from react-bootstrap */}
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={name} onChange={handleNameChange} />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="company">
        <Form.Label>Company</Form.Label>
        <Form.Control type="text" value={company} onChange={handleCompanyChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="phone">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="tel" value={phone} onChange={handlePhoneChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="signature">
        {isTouchDevice ? (
          // render canvas for touchscreen devices
          <>
            <Form.Label>Signature</Form.Label>
            <SignaturePad
              ref={sigPadRef}
              canvasProps={{ className: 'signature-canvas' }}
              />
              <div className="signature-buttons">
              <Button variant="outline-secondary" onClick={handleClear}>
              Clear
              </Button>
              </div>
              </>
              ) : (
              // render input field for non-touchscreen devices
              <SignatureInput
                      value={currentSignature}
                      onChange={handleSignatureChange}
                    />
              )}
        </Form.Group>
        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>

      {/* Display the previous signatures */}
      {signatures.length > 0 && (
        <div className="previous-signatures">
          <h2>Previous Signatures</h2>
          {signatures.map((signature, index) => (
            <div className="signature-container" key={index}>
              <div className="signature-info">
                <p><strong>Name:</strong> {signature.name}</p>
                <p><strong>Company:</strong> {signature.company}</p>
                <p><strong>Phone:</strong> {signature.phone}</p>
              </div>
              <div className="signature-image">
                <img src={signature.signature} alt={`Signature by ${signature.name}`} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
);
}

export default SignatureForm;
