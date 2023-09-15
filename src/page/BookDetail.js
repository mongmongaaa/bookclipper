import React from "react";
import { Link } from "react-router-dom";

function BookDetail() {
  return (
    <div>
      <div> - </div>
      <div>
        <img src="" />
        <p>첵 제목</p>
        <p>저자</p>
        <button>서제에 담기</button>
      </div>
      <ul>
        <li>
          <div>출판사</div>
          <div>비룡출판사</div>
        </li>
        <li>
          <div>출간일</div>
          <div>2013.25.25</div>
        </li>
        <li>
          <div>ISNB</div>
          <div>342232432434324</div>
        </li>
        <li>
          <div>책 소개</div>
          <div>342232432434324</div>
        </li>
      </ul>
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

export default BookDetail;
