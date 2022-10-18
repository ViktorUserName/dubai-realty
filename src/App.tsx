import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import PopupWindow from './components/Header/PopupWindow/PopupWindow';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import data from "./SharedLogic/BlogData.json";
import MainPage from './pages/MainPage/MainPage';
import BlogPage from './pages/BlogPage/BlogPage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes
} from "react-router-dom";
import ContactPage from './pages/ContactPage/ContactPage';



function App() {
  const {results: posts} = data;

  return (
    <>
      <Header/>
        <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path="/Blog" element={<BlogPage cardConfig={posts} />}/>
          <Route path="/Category" element={<CategoryPage/>}/>
          <Route path="/Services" element={<ServicesPage/>}/>
          <Route path="/Contact" element={<ContactPage/>}/>
        </Routes>  
      <Footer/>
    </>
  );
}

export default App;