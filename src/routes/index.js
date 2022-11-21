import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PublicRoutes from './PublicRoutes';
// import ProtectedRoutes from './ProtectedRoutes';
// import { useSelector } from 'react-redux';

const AppRoutes = () => {
//   const auth = useSelector((state) => state.auth.currentUser);

  return (
    <Router>
        <PublicRoutes />
      {/* {!auth && <PublicRoutes />}
      {auth && <ProtectedRoutes />} */}
    </Router>
  );
};

export default AppRoutes;