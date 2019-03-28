import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <Link className="btn btn-success butn-block" to="/client/add">
      <i className="fas fa-plus">New</i>
    </Link>
  );
};
