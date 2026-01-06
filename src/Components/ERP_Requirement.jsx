import React from 'react';
import { Link } from 'react-router-dom';

const ERP_Requirement = () => {
  return (
    <Link to='/erp-capture' className=' fixed bottom-10 right-10 z-40 text-secondary font-bold bg-gradient-to-r from-primary to-white rounded-full py-2 px-4'>
      ERP Requirement
    </Link>
  );
}

export default ERP_Requirement;
