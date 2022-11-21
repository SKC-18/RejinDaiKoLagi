import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loadable from '../components/Loading/Loadable';


// const NotFound = Loadable(lazy(() => import('../features/NotFound')));
const Homepage = Loadable(lazy(() => import('../pages/Home_page')));
const SignIn = Loadable(lazy(()=>import('../pages/SignIn')));
const Featured = Loadable(lazy(() => import('../pages/Featured')));
const Item = Loadable(lazy(() => import('../pages/Item')));
const Market = Loadable(lazy(() => import('../pages/Market')));
const SignUp = Loadable(lazy(() => import ('../pages/SignUp')));
const TermsConditions = Loadable(lazy(()=>import('../pages/TermsConditions')))
const SellProduct = Loadable(lazy(()=>import('../pages/sellProduct')))

const PublicRoutes = () => {
  return (
    <Routes>
      {/* <Route path="*" element={<NotFound />} /> */}
      <Route path="/" element={ <Homepage />} />
      <Route path="/featured" element={ <Featured/>} />
      <Route path='/signin' element={<SignIn />} />
      <Route path="/item/:id" element={ <Item  />} />
      <Route path="/market" element={ <Market />} />
      <Route path = "/signup" element ={ <SignUp />} />
      <Route path = "/termsconditions" element ={<TermsConditions/>} />
      <Route path = "/sellProduct" element ={ <SellProduct />} />
    </Routes>
  )

};

export default PublicRoutes;