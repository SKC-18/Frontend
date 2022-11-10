import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loadable from '../components/Loading/Loadable';


// const NotFound = Loadable(lazy(() => import('../features/NotFound')));
const Homepage = Loadable(lazy(() => import('../pages/Home_page')));
const SignIn = Loadable(lazy(()=>import('../pages/SignIn')));
const Featured = Loadable(lazy(() => import('../pages/Featured')));
const Market = Loadable(lazy(() => import('../pages/Market')));

const PublicRoutes = () => {
  return (
    <Routes>
      {/* <Route path="*" element={<NotFound />} /> */}
      <Route path="/" element={ <Homepage />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path="/featured" element={ <Featured />} />
      <Route path="/market" element={ <Market />} />
    </Routes>
  );
};

export default PublicRoutes;