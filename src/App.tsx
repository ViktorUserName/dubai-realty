import React from 'react';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import BlogPage from './pages/BlogPage/BlogPage';
import ContactPage from './pages/ContactPage/ContactPage';
import data from "./SharedLogic/BlogData.json";

function App() {

  const {results: posts} = data;

  return (
    <>
      {/* <Header/> */}
      {/* <BlogPage cardConfig={posts}/> */}
      <ContactPage/>
      <Footer/>
    </>
  );
}

export default App;