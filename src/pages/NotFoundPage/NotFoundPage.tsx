import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-center bg-light">
      <h1 className="display-1 text-danger">404</h1>
      <p className="fs-3">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn btn-danger btn-lg mt-3">
        Go back to Home
      </Link>
    </div>
  );
};
