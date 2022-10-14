import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import PopupWindow from './components/Header/PopupWindow/PopupWindow';
import MainPage from './pages/MainPage/MainPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import data from "./SharedLogic/BlogData.json";

function App() {

  // const {results: posts} = data;

  return (
    <>
      <Header/>
        <MainPage/>
      <Footer/>
    </>
  );
}

export default App;