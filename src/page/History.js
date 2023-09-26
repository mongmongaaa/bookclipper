import React from 'react'
import { Link } from "react-router-dom";

function History() {
  return (
    <div>
       <header>
        <div>
          <img src="#" />
        </div>
      </header>
      <div>
        <ul>
          <li>
            <ul>
              <li>
                <lmg src="" />
              </li>
              <li>
                <lmg src="" />
              </li>
            </ul>
            <div>
              <img src="" />
              <p>책 제목</p>
            </div>
            <div>
              <p><span>0007</span>님의 클립</p>
              <b>그래서 어쩌구 그래서 그랬어</b>
              <p>이 문장을 읽고 난 뒤 어저구 저쩌구 했다</p>
              <div>
                page<span>153</span>
                <span>2013.02.58</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
       <footer>
        <nav>
          <ul>
            <li>
              <Link to="/MyBookList">
                <img src="#" />
                <p>내 서재</p>
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src="#" />
                <p>홈</p>
              </Link>
            </li>
            <li>
              <Link to="/History">
                <img src="" />
                <p>클립</p>
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  )
}

export default History