import React from 'react';
import './ChangeUrlTemplate.css';

const ChangeUrlTemplate = ({form, children}) => {
  return (
    <main className="change-url-template">
      <div className="title">
        Change URL
      </div>
      <section className="form-wrapper">
        {form}
      </section>
      <section className="change-wrapper">
        { children }
      </section>
    </main>
  );
};

export default ChangeUrlTemplate;