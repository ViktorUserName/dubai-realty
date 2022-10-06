import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import BlogPage from './pages/BlogPage/BlogPage';
import data from "./SharedLogic/BlogData.json";

function App() {

  const {results: posts} = data;

  return (
    <>
      <Header/>
      {/* <BlogPage cardConfig={posts}/> */}
      <Footer/>
    </>
  );
}

export default App;
