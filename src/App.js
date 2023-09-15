import './App.css';
import {HashRouter, Route,Link, Routes} from "react-router-dom";
import Context from "./Context";

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

     

      <footer>
        <nav>
         <ul>
          <li>
            <Link>
            <img src='#'/>
            <p>내 서재</p>
            </Link>
          </li>
          <li>
            <Link>
            <img src='#'/>
            <p>홈</p>
            </Link>
          </li>
          <li>
            <Link>
            <img src='#'/>
            <p>클립</p>
            </Link>
          </li>
         </ul> 
        </nav>
      </footer>
      <Routes>
        <Route>

        </Route>
      </Routes>
    </HashRouter>
    </Context>
    </>
  );
}

export default App;
