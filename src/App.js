import React from 'react'
import Products from './components/Products/Products';
import NavBar from './components/Navbar/NavBar';
import Featured from './pages/Featured';
import Market from './pages/Market';
import signin from './pages/sign_in';
// import Swip from 'swiper';

const App = () => {
  return (
    <div>

            <NavBar />
            {/* <Swip /> */}
            <Products />
    </div>
  )
}

export default App;