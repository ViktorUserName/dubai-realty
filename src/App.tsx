import React from 'react';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';


function App() {
  return (
    <>
      <Header/>
        <MainPage/>
      <Footer/>
    </>
  );
}

export default App;