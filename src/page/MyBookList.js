import React from "react";
import { Link } from "react-router-dom";

function MyBookList() {
  return (
    <div>
      <header>
        <div>
          <img src="#" />
        </div>
      </header>
      <div>
        <div>
          <ul>
            <li>전체</li>
            <li>읽는 중</li>
            <li>완독</li>
          </ul>
        </div>
        <ul>
          <li>
            <img src="" />
            <p>책 제목</p>
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
  );
}

export default MyBookList;
