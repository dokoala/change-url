import React from 'react';
import './Form.css';

const Form = ({value, onChange, onCreate}) => {
  return (
    <div className="form">
      <input value={value} onChange={onChange}/>
      <div className="create-button" onClick={onCreate}>
        주소 변경
      </div>
    </div>
  );
};

export default Form;