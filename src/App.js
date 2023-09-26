import "./App.scss";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Context from "./Context";
import Home from "./page/Home";
import Login from "./page/Login";
import Write from "./page/Write";
import History from "./page/History";
import Search from "./page/Search";
import MyBookList from "./page/MyBookList";
import BookDetail from "./page/BookDetail";
import MybookDetail from "./page/MybookDetail";
import axios from "axios";
import Nickname from "./page/Nickname";

function App() {
  return (
    <>
      <div id="phone">
        <div className="app">
          <BrowserRouter basename="/bookclipper">
            <main>
              <div id="app_pading">
                <Context>
                  <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/Home/:userId" element={<Home />} />
                    <Route path="/Write/:userId/:isbn" element={<Write />} />
                    <Route path="/History" element={<History />} />
                    <Route path="/Search" element={<Search />} />
                    <Route
                      path="/MyBookList/:userId"
                      element={<MyBookList />}
                    />
                    <Route path="/Nickname/:userId" element={<Nickname />} />
                    <Route
                      path="/BookDetail/:type/:userId/:isbn"
                      element={<BookDetail />}
                    />
                    <Route
                      path="/MybookDetail/:userId/:isbn"
                      element={<MybookDetail />}
                    />
                  </Routes>
                </Context>
              </div>
            </main>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
