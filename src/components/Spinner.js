// Spinner.js
import React from 'react';
import loading from './loading.gif';

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <img src={loading} alt="loading" />
    </div>
  );
}

export default Spinner;
