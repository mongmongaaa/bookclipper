import './App.scss';
import {HashRouter, Route,Link, Routes} from "react-router-dom";
import Context from "./Context";
import Home from "./page/Home";
import Login from './page/Login';
import Write from './page/Write';
import History from './page/History';
import Search from './page/Search';
import MyBookList from './page/MyBookList';
import BookDetail from './page/BookDetail';
import MybookDetail from './page/MybookDetail';

function App() {
  return (
    <>
    <Context>
    <HashRouter>
      <header>
      <div>
        <img src='#'/>
      </div>
      </header>
      <main>
        
      </main>
      <Routes>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/Write" element={<Write/>}/>
      <Route path="/History" element={<History/>}/>
      <Route path="/Search" element={<Search/>}/>
      <Route path="/MyBookList" element={<MyBookList/>}/>
      <Route path="/BookDetail" element={<BookDetail/>}/>
      <Route path="/MybookDetail" element={<MybookDetail/>}/>
    </Routes>
    </HashRouter>
    </Context>
    </>
  );
}

export default App;
