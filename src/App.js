import React from 'react';
import './App.css';
import {Route,Routes} from "react-router-dom"
import ShopScreen from './screens/ShopScreen';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route index path="/" element={<ShopScreen/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;


