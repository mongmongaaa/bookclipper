import React from "react";
import { Link } from "react-router-dom";

function MybookDetail() {
  return (
    <div>
      <div>
      <div> - </div>
        <div>
          <img src="" />
          <p>첵 제목</p>
          <p>저자</p>
          <button>상세보기</button>
        </div>
        <ul>
          <li>나는 이 책을</li>
          <li>읽는 중</li>
          <li>완독</li>
        </ul>
        <div>
          <p>
            나의 독서 클립(<span>0</span>)
          </p>
          <button>클립하기</button>
        </div>
        <ul>
          <li>
            <div>
                <ul>
                    <li><lmg src=''/></li>
                    <li><lmg src=''/></li>
                </ul>
              <div>page<span>153</span><span>2013.02.58</span></div>
              <b>그래서 어쩌구 그래서 그랬어</b>
              <p>이 문장을 읽고 난 뒤 어저구 저쩌구 했다</p>
              <p>공유된 클림</p>
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
  );
}

export default MybookDetail;
