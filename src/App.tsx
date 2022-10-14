import './App.scss';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import BlogPage from './pages/BlogPage/BlogPage';
import ContactPage from './pages/ContactPage/ContactPage';
import MainPage from './pages/MainPage/MainPage';
import data from "./SharedLogic/BlogData.json";

function App() {

  const {results: posts} = data;

  return (
    <>
      <Header/>
       {/* <BlogPage cardConfig={posts}/> */}
       <ContactPage/>
      {/* <ContactUs/> */}
      <MainPage/>
      <Footer/>
    </>
  );
}

export default App;