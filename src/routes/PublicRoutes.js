import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loadable from '../components/Loading/Loadable';
import SignInUpContainer from '../pages/SignInUp';


// const NotFound = Loadable(lazy(() => import('../features/NotFound')));
const Homepage = Loadable(lazy(() => import('../pages/Home_page')));
const Featured = Loadable(lazy(() => import('../pages/Featured')));
const SignIn = Loadable(lazy(()=>import('../pages/SignIn')));
const SignUp = Loadable(lazy(()=>import('../pages/SignUp')));
const SignInUp = Loadable(lazy(() => import('../pages/SignInUp/index')));

const PublicRoutes = () => {
  return (
    <Routes>
      {/* <Route path="*" element={<NotFound />} /> */}
      <Route path="/" element={ <Homepage />} />
      <Route path="/featured" element={ <Featured />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path="/SignUp" element={ <SignUp />} />
      <Route path="/SignInUp" element={<SignInUpContainer/>} />
    </Routes>
  );
};

export default PublicRoutes;