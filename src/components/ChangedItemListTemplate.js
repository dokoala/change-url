import React from 'react';
import './ChangedItemListTemplate.css';

const ChangedItemListTemplate = ({form, children}) => {
  return (
    <main className="changedItem-list-template">
      <div className="title">
        Change URL
      </div>
      <section className="form-wrapper">
        {form}
      </section>
      <section>
        { children }
      </section>
    </main>
  );
};

export default ChangedItemListTemplate;