import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export const UnderConstructionPage = () => {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="col-md-6 text-center">
          <h1 className="display-4">Website Under Construction</h1>
          <p className="lead">We are currently working on our website and will be back soon!</p>
          <p>Thank you for your patience.</p>
        </div>
      </div>
    </div>
  );
};

