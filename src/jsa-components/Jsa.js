import React, { useState } from 'react'
import JobAnalysis from './JobAnalysis';
import JobDetails from './JobDetails';
import SignatureForm from './SignatureForm';

function Jsa() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState ({
    date: '',
    workOrder: '',
    tasks: '',
    addressOne: '',
    addressTwo: '',
    city: '',
    state: '',
    zip: 0,
    supervisor: '',
    preparer: '',
    ppe: '',
  }) 

  const FormTitles = ['Job Details', 'Job Analysis', 'Employee Information'];

  const PageDisplay = () => {
    if (page === 0) {
      return <JobDetails formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <JobAnalysis />;
    } else {
      return <SignatureForm />
    }
  }

  function handleStateChange(event) {
    const newState = event.target.value;
    setFormData(prevFormData => ({
      ...prevFormData,
      state: newState
    }));
  }  

  return (
    <div className='jsa'>
      <div className='progressbar'></div>
      <div className='form-container'>
        <div className='header'>
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className='form-body'>{PageDisplay()}</div>
        <div className='form-footer'>
          <button
            disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
              }}
          >
            Previous Step
          </button>
          <button
            disabled={page === FormTitles.length - 1} 
            onClick={() => {
              setPage((currPage) => currPage + 1);
              }}
            >
              Next Step
          </button>
        </div>
      </div>
    </div>
  )
}

export default Jsa