import React from 'react';
import './App.css';
import {Route,Routes} from "react-router-dom"
import ShopScreen from './screens/ShopScreen';
import Header from './components/Header';
import Footer from './components/Footer';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
    {/*  SEO settings:
a. Page title
b. Page description
c. Setting of H1&H2 tags*/}
    <Helmet>
      <title>Welcome To ProShop | Home</title>
      <meta name="description" content='We sell the best products for cheap'></meta>
      <meta name="keywords" content='electronics, buy electronics, cheap electronics'></meta>
    </Helmet>
    <div className="App">
      <Header/>
        <Routes>
          <Route index path="/" element={<ShopScreen/>}/>
        </Routes>
      <Footer/>
    </div>
    </>
  );
}

export default App;


